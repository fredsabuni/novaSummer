
import HomeMain from "@/components/home-7";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: 'Nova Summer Meadows',
  description:
    'Apartments for rent in Durham, NC.',
}

const HomePage7 = () => {
  return (
    <>
    <MetaComponent meta={metadata} />
      <HomeMain />
    </>
  );
};

export default HomePage7
