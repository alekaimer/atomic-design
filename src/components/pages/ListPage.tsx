import { Card } from "../molecules/Card";
import { HomeDefault } from "../templates/HomeDefault";

const ListChildren = () => {
  return (
    <>
      <Card imageUrl={"https://picsum.photos/300/200?v=1"} imgTitle={"Title alt and title text"} title={"Image Title 1"} />
      <Card imageUrl={"https://picsum.photos/300/200?v=2"} imgTitle={"Other alt and title text"} title={"Image Title 2"} />
      <Card imageUrl={"https://picsum.photos/300/200?v=3"} imgTitle={"Other alt and title text"} title={"Image Title 3"} />
    </>
  );
}

export const ListPage = () => {

  return (
    <HomeDefault listChildren={<ListChildren />} />
  );
}