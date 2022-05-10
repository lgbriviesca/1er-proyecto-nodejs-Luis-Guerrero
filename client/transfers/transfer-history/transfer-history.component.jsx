import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux actions
import { getUsersTransfers } from '../../../store/actions/transfers.actions';

// Components
import TransferItem from '../transfer-item/transfer-item.component';

import classes from './transfer-history.module.css';

/* const transfers = [
	{ id: 't1', amount: 200, date: '2022-4-12', user: 'Max' },
	{ id: 't2', amount: 500, date: '2022-5-20', user: 'Joe' },
	{ id: 't3', amount: 700, date: '2022-6-4', user: 'John' },
];  */

const TransferHistory = () => {
  const transfer = useSelector(
    state =>
      //{console.log(state)}
      state.transfers.transfers
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersTransfers());
  }, [dispatch]);
  console.log(transfer);
  return (
    <div>
      {transfer &&
        transfer.map(transfer => <TransferItem transfer={transfer} />)}
    </div>
  );
};

export default TransferHistory;
