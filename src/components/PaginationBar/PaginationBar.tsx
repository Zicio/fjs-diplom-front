import styles from "./PaginationBar.module.scss";

const PaginationBar = () => {
  const MockUsersLength = 30;
  const arr: number[] = new Array(Math.ceil(MockUsersLength / 10));
  for (let i = 0; i < arr.length; i++) {
    arr[i] = i + 1;
  }
  return (
    <fieldset className={styles.paginationBar}>
      {arr.map((number) => {
        return (
          <div key={number} className={styles.paginationBar__button}>
            <input
              className="hidden"
              type="radio"
              id={String(number)}
              name="page"
              value={number}
            />
            <label className={styles.button__text} htmlFor={String(number)}>
              {number}
            </label>
          </div>
        );
      })}
    </fieldset>
  );
};

export default PaginationBar;
