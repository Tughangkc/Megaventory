
import {  useNavigate } from 'react-router-dom';
import orderData from '../../purchaseorder.json'; 
import { ListGroup } from 'react-bootstrap';
import '../global.css';
const Order = () => {

  const navigate = useNavigate();

  const handleClick = (orderId) => {
    navigate(`/orders/${orderId}`);
  };

  return (
    
      <ListGroup className='listgroup'>
        {orderData.mvPurchaseOrders.map((order) => (
          <ListGroup.Item variant='black'
          className='listgroup-item'
            onClick={() => handleClick(order.PurchaseOrderId)} 
            key={order.PurchaseOrderId}
          >
              {order.PurchaseOrderTypeAbbreviation} - {order.PurchaseOrderNo}
            
          </ListGroup.Item>
        ))}
      </ListGroup> 

  );
};

export default Order;
