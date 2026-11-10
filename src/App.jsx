import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CssBaseline,
  Box,
} from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function App() {
  // состояние диалогового окна
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <CssBaseline />

      {/* Верхняя панель навигации */}
      <AppBar position="static">
        <Toolbar>
          <RocketLaunchIcon sx={{ mr: 1.5 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My MUI App
          </Typography>
          <Button color="inherit" onClick={handleOpen}>
            О проекте
          </Button>
        </Toolbar>
      </AppBar>

      {/* Основная часть */}
      <Container maxWidth="sm">
        <Box sx={{ mt: 10, textAlign: 'center' }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Добро пожаловать!
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Это приложение собрано на компонентах Material UI: AppBar, Container, Typography,
            Button и Dialog.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<InfoOutlinedIcon />}
            onClick={handleOpen}
          >
            Открыть диалог
          </Button>
        </Box>
      </Container>

      {/* Диалоговое окно */}
      <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
        <DialogTitle id="dialog-title">Привет из Material UI 👋</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Это диалоговое окно открывается и закрывается через состояние useState. Закрыть его
            можно кнопками ниже, клавишей Esc или кликом вне окна.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={handleClose} variant="contained" autoFocus>
            Понятно
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
