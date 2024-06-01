import { Container, Header, SectionTemplate } from 'components';

export default function NestedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <Header />
      <SectionTemplate>{children}</SectionTemplate>
    </Container>
  );
}
