import { Center } from '../../common/chakra';

interface Props {
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <Center w="100vw" h="100vh">
      {props.children}
    </Center>
  );
};

export default Layout;
