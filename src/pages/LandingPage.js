import React, { useState } from 'react';
import { Jumbotron, Button, Modal, ModalHeader, ModalBody, } from 'reactstrap';
import '../components/Header.css';
import bigImg from '../assets/money_jar.png'
import Header from '../components/Header';
import firstImg from '../assets/piggy_bank.png';
import secondImg from '../assets/target.png';
import thirdImg from '../assets/vault.png';
import fourthImg from '../assets/revenue_.png'
import fifthImg from '../assets/revenew.png';
import sixImg from '../assets/revenue_ graph.png';
import secureImg from '../assets/password.png';
import RegisterForm from '../components/auth/registerForm';

const Landing = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);


    return (
        <div>
            <Header />
            <Jumbotron className="bg-white h-70">
                <div className="row">
                    <div className="mt-3 col-md-5 d-sm-block">
                        <h1 className="display-5 font-weight-bolder"> Discover a new way to save and Invest.</h1>
                        <p className="lead">Get your money working for you. With impressive interest rates, tools and guides, nickels helps you make smart financial decisions in savings and investment.</p>

                        <p className="lead">
                            <Button color="info" className="shadow btn-group-lg" onClick={toggleModal}> Create a Free Account </Button>
                        </p>
                    </div>
                    <div className="col-md-7 dork d-md-flex align-items-md-center justify-content-md-center">

                        <img src={bigImg} alt="money jar" height={500} width={700} />

                    </div>
                </div>
            </Jumbotron>

            <section className="bg-info h-100 pb-5">
                <div className="p-2 d-flex flex-column align-items-md-center justify-content-center h-25 mb-4">
                    <h2 className="text-white display-7 p-sm-3 font-medium"> Save & Invest Smartly</h2>
                    <summary className="text-white w-auto p-sm-3 font-italic">
                        Nickels helps you reach your savings target much faster with various savings types. <br />
                        <span className="ml-md-5">Plus you can even team up with others to reach joint goals.</span>
                    </summary>

                </div>
                <div className="m-3 row">
                    <div className="col-md-4 mb-2">
                        <div className="card mb-3 shadow d-flex flex-column align-items-center justify-content-center h-100">
                            <img src={firstImg} alt="save" width={200} height={180} className="mt-2" />
                            <div className="card-body">
                                <h3 className="display-5 text-info p-1"> Enjoy Quarterly Savings</h3>
                                <p className="card-text p-1 text-muted">Join over 100,000 users that use our quarterly savings feature called "The Piggy" to reach their general/personal savings goals more quickly</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2">
                        <div className="card mb-3 shadow d-flex flex-column align-items-center justify-content-center h-100">
                            <img src={secondImg} alt="save" width={200} height={180} className="mt-2" />
                            <div className="card-body">
                                <h3 className="display-5 text-info p-1"> Reach Multiple Targets</h3>
                                <p className="card-text p-1 text-muted">Set and reach multiple saving goals you set using our "Target Savings" feature, you can save for holidays, fees or even special events.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2">
                        <div className="card mb-3 shadow d-flex flex-column align-items-center justify-content-center h-100">
                            <img src={thirdImg} alt="save" width={200} height={180} className="mt-2" />
                            <div className="card-body">
                                <h3 className="display-5 text-info p-1"> Lock Funds Away</h3>
                                <p className="card-text p-1 text-muted">Use our "SafeLock" feature to lock funds away so you don't have access until your set date. You also earn over 13% p.a.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-100 bg-white pb-4">
                <div className="p-2 d-flex flex-column align-items-md-center justify-content-sm-center h-25 mb-4">
                    <h2 className="text-info display-7 font-weight-bolder"> Invest in bits & on the go!</h2>
                    <p className="text-muted bl">Many investments are expensive, which makes it hard to get started.</p>
                    <p className="text-muted bl rm-m"> At Nickels, you too can invest in tiny & affordable chunks and still enjoy the same return rates in amazing opportunities.</p>
                </div>
                <div className="pt-2 m-2 row pb-3">
                    <div className="col-md-4 mb-2">
                        <div className="card mb-3 d-flex flex-column align-items-center justify-content-center h-100">
                            <img src={fourthImg} alt="save" width={200} height={180} className="mt-2" />
                            <div className="card-body">
                                <h3 className="display-5 text-info p-1">Co-invest
                                in opportunities</h3>
                                <p className="card-text p-1 text-muted"> Join other Nickelites to co-invest in guaranteed fixed income investments & other amazing projects.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2">
                        <div className="card mb-3 d-flex flex-column align-items-center justify-content-center h-100">
                            <img src={fifthImg} alt="save" width={230} height={180} className="mt-2" />
                            <div className="card-body">
                                <h3 className="display-5 text-info p-1"> Decide
                                on what to invest</h3>
                                <p className="card-text p-1 text-muted"> You have complete control on the type of investments you want to engage. All opportunities are pre-vetted by Nickels.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-2">
                        <div className="card mb-3 d-flex flex-column align-items-center justify-content-center h-100">
                            <img src={sixImg} alt="save" width={200} height={180} className="mt-2" />
                            <div className="card-body">
                                <h3 className="display-5 text-info p-1">Watch
                                your portfolio grow</h3>
                                <p className="card-text p-1 text-muted"> Easily monitor the progress of your investments from your PiggyVest dashboard.

                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="h-100 p-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center mt-4">
                        <img src={secureImg} width={500} height={400} alt="secured money" />
                    </div>
                    <div className="col-md-6">
                        <p className="font-weight-bold display-3 text-warning"> Your Money is well protected. </p>
                        <div>
                        </div>
                    </div>
                </div>
            </section>

            <Modal isOpen={modal} toggle={toggle} className="p-2">
                <ModalHeader toggle={toggleModal}> Create an account </ModalHeader>
                <ModalBody className="h-50">
                    <RegisterForm className="w-100" />
                </ModalBody>
            </Modal>
        </div>
    )
}
export default Landing;