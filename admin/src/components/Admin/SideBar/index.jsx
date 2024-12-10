import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleNavigation = (path) => () => {
    navigate(path);
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Menu</Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: 300 }
        }}
      >
        <List>
          {[
            { text: 'Товари', path: '/charts' },
            { text: 'Статистика', path: '/Data' },
            { text: 'Компоненти', path: '/Components' },
            { text: 'Dash', path: '/Dash'}
          ].map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={handleNavigation(item.path)}>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
