import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAvatar, putAvatar } from '../../redux/actions/user';
import { Input, Button, Nav } from './styled'

const ImagePicker = () => {

  const loggedUser = useSelector((state) => state.user.loggedUser.id)

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

    if (!loggedUser) return dispatch(putAvatar(avatar));
    dispatch(changeAvatar(avatar, id))
  }
 
  return (
    <>
      <Nav>
        <Input type="file" name="file"  onChange={uploadImage} />
        {
          loading ? (
            <h3 > Loading...</h3>
          ) : (
              <img alt="Avatar" src={image ? image : avatar1} style={{ width: '300px', border: "1px solid grey", borderRadius: "5px" }} />
            )
        }

        <Button type="button" onClick={handleClick}> change picture</Button>
      </Nav>
    </>
  )
};

export default ImagePicker;