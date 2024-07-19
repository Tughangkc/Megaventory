
import { useParams, Link } from 'react-router-dom';
import orderData from '../purchaseorder.json'; 
import './global.css';
import { Col, Container, Row, Table, Breadcrumb } from 'react-bootstrap';

const OrderDetails = () => {
  const { orderId } = useParams();
  const order = orderData.mvPurchaseOrders.find(o => `${o.PurchaseOrderId}` === orderId);

  return (
    <div className='container'>
      <Container  fluid >
        <Row>
          <Col></Col>
          <Col md={8} lg={8}>
            <Breadcrumb className='mt-1'>
              <Breadcrumb.Item>
                <Link to="/">Purchase Orders
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>
              Order id: {orderId}
              </Breadcrumb.Item>
            </Breadcrumb>

            {order ? (
              <>
               <h1 className='text-center m-5 '>Order Details</h1>
                <Table variant='dark' striped bordered hover responsive>
                  <tbody>
                    <tr>
                      <td><strong>Address:</strong></td>
                      <td>{order.PurchaseOrderAddress}</td>
                    </tr>
                    <tr>
                      <td><strong>Contact Person:</strong></td>
                      <td>{order.PurchaseOrderContactPerson}</td>
                    </tr>
                    <tr>
                      <td><strong>Status:</strong></td>
                      <td>{order.PurchaseOrderStatus}</td>
                    </tr>
                  </tbody>
                </Table>

                <h2 className='text-center m-5' >Order Items</h2>

                <Table variant='dark' striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Product SKU</th>
                      <th>Quantity Ordered</th>
                      <th>Unit Price</th>
                      <th>Total Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.PurchaseOrderDetails.map((item, index) => (
                      <tr key={index}>
                        <td>{item.PurchaseOrderRowProductSKU}</td>
                        <td>{item.PurchaseOrderRowQuantity}</td>
                        <td>${item.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount.toFixed(2)}</td>
                        <td>${item.PurchaseOrderRowTotalAmount.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </>
            ) : (
              <p>Order not found.</p>
            )}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default OrderDetails;
