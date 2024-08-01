import { Container, Header } from 'components';

export default function NestedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}
