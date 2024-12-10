import React from 'react'
import Button from 'react-bootstrap/Button';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Para = () => {
    return (
        <>
            <section className='Sec'>
                <div className='Sec-content'>
                    <div>
                        <h2>Best Coffe</h2>
                        <h4>Make your day great with our special coffee!</h4>
                        <p>Welcome to our coffee paradies,where every bean tells a story and every cup sparks joy.</p>
                    </div>

                    {/* <Image src={"/img1.png.avif"}/>; */}
                    <img src={"/logo3.png"} />



                </div>
                <div className='Btn'>
                    <button className='Btn1'>Order Now</button>
                    <button className='Btn2'>Contact Us</button>
                </div>

            </section>

            <section>
                <div className="Card">
                    <Card style={{ width: '18rem', height: '25rem' }}>
                        <div className="Cardimg"><Card.Img variant="top" src={"/flat.png"} /></div>
                        {/* <Card.Img variant="top" src={"/flat.png"} /> */}
                        <Card.Body>
                            <Card.Title className='Ct'>Flat White Coffee</Card.Title>
                            <Card.Text>
                                Coffee is a hug in a mug
                            </Card.Text>

                            <Button variant="primary">Click to order</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', height: '25rem' }}>
                    <div className="Cardimg"><Card.Img variant="top" src="/mocha.png" /></div>
                        
                        <Card.Body>
                            <Card.Title>Mocha Coffee</Card.Title>
                            <Card.Text>
                                Coffee is a hug in a mug
                            </Card.Text>

                            <Button variant="primary">Click To Order</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', height: '25rem' }}>
                    <div className="Cardimg"><Card.Img variant="top" src="/americano.png" /></div>
                        
                        <Card.Body>
                            <Card.Title>Cappuccino Coffee</Card.Title>
                            <Card.Text>
                                Coffee is a hug in a mug
                            </Card.Text>
                            <Button variant="primary">Click To Orde</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', height: '25rem' }}>
                    <div className="Cardimg"><Card.Img variant="top" src="cappuccino.png" /></div>
                        {/* <Card.Img variant="top" src="cappuccino.png" /> */}
                        <Card.Body>
                            <Card.Title>Americano Coffee</Card.Title>
                            <Card.Text>
                                Coffee is a hug in a mug
                            </Card.Text>
                            <Button variant="primary">Click To Order</Button>
                        </Card.Body>
                    </Card>
                </div>

            </section>

        </>
    )
}

export default Para
