const AccessErrorHint = () => {
  // TODO добавить missingRole из Store;
  return (
    <div>
      <h2>Отказано в доступе</h2>
      <p>{`Требуются права ${missingRole}`}</p>
      <button type="button">Закрыть</button>
    </div>
  );
};

export default AccessErrorHint;
