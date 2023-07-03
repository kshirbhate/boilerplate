import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from 'actions/reqres';
import { Button } from '@mui/material';

const Login = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.reqres.loading);
  const list = useSelector((state) => state.reqres.list);

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  return (
    <div>
      <Button variant="contained">Login</Button>
      {loading && <h1>Loading</h1>}
      {list.map((it) => (
        <div key={it.email}>
          <h1>{it.email}</h1>
        </div>
      ))}
    </div>
  );
};

export default Login;
