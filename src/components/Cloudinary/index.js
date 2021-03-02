import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAvatar } from '../../redux/actions/user';
/* import { Nav, NavbarContainer, Title, MyImage, TitleContainer, SubTitle } from './styled'; */



const ImagePicker = () => {

  const id = useSelector((state)=> state.user.id)
  const avatar1 =useSelector((state) => state.user.avatar)
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("")

  const uploadImage = async e => {

    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'avatarImage');
    setLoading(true)

    const res = await axios.post(`https://api.cloudinary.com/v1_1/dx9na6eh7/image/upload`, data);

    setImage(res.data.secure_url)
    setLoading(false);
  }
  const avatar = String(image);
  const dispatch = useDispatch();
  const handleClick = () =>{
    dispatch(changeAvatar(avatar, id))
  }
 
  return (
    <>
      <nav>
        <input type="file" name="file" placeholder="Change picture" onChange={uploadImage} />
        {
          loading ? (
            <h3 > Loading...</h3>
          ) : (
              <img alt="Avatar" src={image ? image : avatar1} style={{ width: '300px' }} />
            )
        }
      </nav>
      <nav>
        <input type="button" onClick={handleClick}/>
      </nav>
    </>
  )
};

export default ImagePicker;