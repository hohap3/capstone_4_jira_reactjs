import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const PAGE_SIZE = 3;


const MyAvatarGroup = () => {
  const [activeUser, setActiveUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const {taskDetailModal } = useSelector((state) => state.task);


  const users = [];
  taskDetailModal?.assigness.forEach((item) => {
    users.push({
      name: item.name,
      avatarSrc: item.avatar,
      userId: item.userId
    });
  });
  const handleAvatarClick = (user) => {
    setActiveUser(user);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const pageUsers = users.slice(startIndex, endIndex);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',position: 'relative' }}>
      <AvatarGroup max={PAGE_SIZE}  onChange={handlePageChange} sx={{position:"relative",cursor:"pointer",zIndex:999}}>
        {pageUsers.map((user) => (
          <Tooltip title={`${user.name}, ID: ${user.userId}`} key={user.name}>
            <Avatar alt={user.name} src={user.avatarSrc} onClick={() => handleAvatarClick(user)} />
          </Tooltip>
        ))}
        
      </AvatarGroup>
      <Box sx={{position:"absolute",zIndex:100}}>
        <Pagination count={Math.ceil(users.length / PAGE_SIZE)} page={currentPage} onChange={handlePageChange} />
      </Box>
    
    </Box>
  );
};

export default MyAvatarGroup;
