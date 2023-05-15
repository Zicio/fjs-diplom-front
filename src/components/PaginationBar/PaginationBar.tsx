import Button from "@/components/Button/Button";

const PaginationBar = () => {
  const MockUsersLength = 30;
  const arr: number[] = new Array(Math.ceil(MockUsersLength / 10));
  for (let i = 1; i <= arr.length; i++) {
    arr.push(i);
  }
  return (
    <div>
      {arr.map((number) => {
        return <Button key={number} type="button" text={String(number)} />;
      })}
    </div>
  );
};

export default PaginationBar;
