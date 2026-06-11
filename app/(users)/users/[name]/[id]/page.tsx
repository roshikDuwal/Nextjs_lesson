const UserId = async (props: any) => {
  const user = await props.params;
  return (
    <div>
      {user.name} - {user.id} Page
    </div>
  );
};

export default UserId;
