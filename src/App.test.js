import { render, screen } from '@testing-library/react';
import App from './App';

test('başlık ve bölümler doğru render ediliyor', () => {
  render(<App />);
  expect(screen.getByText(/Hikmet Alanlı/i)).toBeInTheDocument();
  expect(screen.getByText(/Bilgisayar Mühendisliği Öğrencisi/i)).toBeInTheDocument();
  expect(screen.getByText(/Hakkımda/i)).toBeInTheDocument();
  expect(screen.getByText(/Eğitim/i)).toBeInTheDocument();
  expect(screen.getByText(/Yetenekler/i)).toBeInTheDocument();
  expect(screen.getByText(/Projeler/i)).toBeInTheDocument();
  expect(screen.getByText(/İletişim/i)).toBeInTheDocument();
});
