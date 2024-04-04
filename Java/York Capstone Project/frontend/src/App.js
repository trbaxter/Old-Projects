import './App.css';
import {Col, Container, Image, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import 'bootstrap/dist/css/bootstrap.css'
import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";
import CreateStage from "./components/CreateStage";
import StageList from "./components/StageList";
import StageDetails from "./components/StageDetails";

function App() {
    let token = useSelector(state => state.token);
    let error = useSelector(state => state.error);
    let name = useSelector(state => state.firstName)
    let errorMessage = null;

    if (error) {
        errorMessage = <p>{error}</p>
    }
    let content = null;

    if (token) {
        content = (
            <>
                <Col style={{position: "absolute",
                            textAlign: "center",
                            wordBreak: "break-all",
                            right: 5,
                            bottom: 5,
                            backgroundColor: "beige"}}
                            className={"border"}>
                    <a href={"#"} className={"link-primary"}>User Agreement</a> <br/>
                    <a href={"#"} className={"link-primary"}>Content Policy</a> <br/>
                    <a href={"#"} className={"link-primary"}>Privacy Policy</a> <br/>
                    <a href={"#"} className={"link-primary"}>Moderator Code of Conduct</a> <br/>
                    ____________________________ <br/>
                    <a href={"#"} className={"link-dark"} style={{padding: 5}}>English</a> <br/>
                    <a href={"#"} className={"link-dark"}>Français</a> <br/>
                    <a href={"#"} className={"link-dark"}>Italiano</a> <br/>
                    <a href={"#"} className={"link-dark"}>Deutsch</a> <br/>
                    <a href={"#"} className={"link-dark"}>Español</a> <br/>
                    <a href={"#"} className={"link-dark"}>Português</a> <br/>
                    ____________________________ <br/>
                    York Solutions, LLC © 2022. <br/> All rights reserved. <br/>
                </Col>

                <Col>
                    <Row style={{backgroundColor: "darkcyan",
                        position: "absolute",
                        right: 18,
                        width: 237,
                        fontSize: 20}}>
                        <Container style={{textAlign: "center", color: "white"}}>
                            Forum Rules
                        </Container>
                        <Container>
                            <Row>
                                <Container style={{backgroundColor: "bisque", fontSize: 15, paddingTop: 5, paddingBottom: 10}}>
                                    1.) No editorialized titles; {<br/>} Title must match article title.
                                    <hr style={{padding: 0}}/>
                                    2.) No paywalls/blogspam <br/> that steal content.
                                    <hr/>
                                    3.) Do not be unnecessarily rude or provocative.
                                    <hr/>
                                    4.) Racism, sexism, vitriolic or overly crude contributions will be removed.
                                    Users who engage in such behavior may be banned at a moderator's discretion.
                                    <hr/>
                                    5.) No bots or novelty accounts.
                                    <hr/>
                                    6.) No NSFW posts or material.
                                    <hr/>
                                </Container>
                            </Row>
                        </Container>

                    </Row>
                </Col>
                    <Container style={{position: "absolute", left: 5, fontSize: 20}}>
                        You are now logged in.<br/>
                        Welcome, <span style={{fontStyle: "italic", fontSize: 20}}>{name}</span>! <br/> <br/>
                    </Container>
                    <Container>
                        <Row style={{backgroundColor: "darkslategray",
                            position: "absolute",
                            left: 18,
                            top: 100,
                            width: 237,
                            fontSize: 20,
                            borderRadius: 8}}>
                            <Container style={{textAlign: "center", color: "white", fontWeight: "bold"}}>
                                Community Info
                            </Container>

                        </Row>
                        <Row>
                            <Container style={{position: "absolute", left: -5, top: 135}}>
                                <Image src={"https://styles.redditmedia.com/t5_2qh3l/styles/communityIcon_fmygcobc22z81.png?width=256&s=20360f000285c26be3d504fdb0cc8e6d6d58289c"} width={40}></Image>
                            </Container>
                            <Container style={{position: "absolute", left: 40, top: 142.5, fontWeight: "bold"}}>
                                York News
                            </Container>
                            <Container style={{position: "absolute", left: 0, top: 177}}>
                                The place for news articles {<br/>} about current events in the {<br/>} United States and the rest of {<br/>} the world. Discuss it all here.
                            </Container>
                        </Row>
                        <Row>
                            <Container style={{width: 25, height: 25, position: "absolute", left: -5, top: 285}}>
                                <Image src={"https://icons.iconarchive.com/icons/icons8/ios7/256/Food-Birthday-Cake-icon.png"} width={30}></Image>
                            </Container>
                            <Container style={{position: "absolute", left: 30, top: 290, color: "gray"}}>
                                Created Sept 12, 2022 <hr style={{position: "absolute", left: -25}} width={230}/>
                            </Container>
                        </Row>
                        <Row>
                            <Container style={{position: "absolute", left: 5, top: 335, fontWeight: "bold"}}>
                                16.3k<br/>
                            </Container>
                            <Container style={{position: "absolute", left: 0, top: 355, color: "darkgray", fontSize: 13}}>
                                Members
                            </Container>
                            <Container style={{position: "absolute", left: 80, top: 335}}>
                                <Image src={"data:image/png;base64,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"} width={10}></Image>
                            </Container>
                            <Container style={{position: "absolute", left: 95, top: 335, fontWeight: "bold"}}>
                                4.6k
                            </Container>
                            <Container style={{position: "absolute", left: 90, top: 355, color: "darkgray", fontSize: 13}}>
                                Online
                            </Container>
                            <Container style={{position: "absolute", left: 175, top:335, fontWeight: "bold"}}>
                                7
                            </Container>
                            <Container style={{position: "absolute", left: 150, top: 355, color: "darkgray", fontSize: 13}}>
                                Moderators
                            </Container>
                        </Row>

                        <Row style={{backgroundColor: "black",
                            position: "absolute",
                            left: 18,
                            top: 400,
                            width: 237,
                            fontSize: 20,
                            borderRadius: 8}}>
                            <Container style={{textAlign: "center", color: "white", fontWeight: "bold"}}>
                                Moderators
                            </Container>
                            <Container style={{position: "absolute", left: 193, top: -3}}>
                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPX-_P1LpJ61SnzJq0sjg5AeWrfQgMbm20KVw3XqzesY8OnRN4j60foeMVGTwSU-4OUQ0&usqp=CAU"}
                                     width={25}
                                     style={{cursor: "pointer"}}/>
                            </Container>
                        </Row>
                        <Container style={{position: "absolute", left: 32, top: 450}}>
                            Intrepid-Dig-1856 <br/> <br/>
                            Electronic_Extreme24 <br/> <br/>
                            ThisBoiEatsEggos <br/> <br/>
                            Siamese-Bell_Pepper <br/> <br/>
                            throwaway_Shots <br/> <br/>
                            Some_Random_Name07 <br/> <br/>
                            Futuristic_virtual-matrix
                            <hr width={220} style={{position: "absolute", left: -22, top: 310}}/>
                        </Container>
                        <Container style={{position: "absolute", left: -9, top: 440}}>
                            <img src={"https://static.vecteezy.com/system/resources/previews/001/991/687/original/crown-isolated-icon-symbol-illustration-of-crown-icon-on-white-background-free-vector.jpg"} width={40}></img>
                        </Container>
                        <Container style={{position: "absolute", left: -3, top: 495}}>
                            <img src={"https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/shield.png"} width={25}></img>
                        </Container>
                        <Container style={{position: "absolute", left: -3, top: 545}}>
                            <img src={"https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/shield.png"} width={25}></img>
                        </Container>
                        <Container style={{position: "absolute", left: -1, top: 590}}>
                            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Emblem_icon_light_blue.png/667px-Emblem_icon_light_blue.png"} width={20}></img>
                        </Container>
                        <Container style={{position: "absolute", left: -1, top: 640}}>
                            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Emblem_icon_light_blue.png/667px-Emblem_icon_light_blue.png"} width={20}></img>
                        </Container>
                        <Container style={{position: "absolute", left: -1, top: 687}}>
                            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Emblem_icon_light_blue.png/667px-Emblem_icon_light_blue.png"} width={20}></img>
                        </Container>
                        <Container style={{position: "absolute", left: -1, top: 734}}>
                            <img src={"https://www.clipartmax.com/png/full/19-193882_shield-red-clip-art-at-clker-red-shield-logo-vector.png"} width={20}></img>
                        </Container>

                        <Container>
                            <img src={"https://static.vecteezy.com/system/resources/previews/001/991/687/original/crown-isolated-icon-symbol-illustration-of-crown-icon-on-white-background-free-vector.jpg"} width={40} style={{position: "absolute", left: -1, top: 785}}></img>
                            <span style={{position: "absolute", left: 40, top: 793.5}}>Forum Owner</span>
                            <img src={"https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/shield.png"} width={25} style={{position: "absolute", left: 6, top:820}}></img>
                            <span style={{position: "absolute", left: 40, top: 820}}>Senior Moderator</span>
                            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Emblem_icon_light_blue.png/667px-Emblem_icon_light_blue.png"} width={20} style={{position: "absolute", left: 8, top: 847.5}}></img>
                            <span style={{position: "absolute", left: 38, top: 847.5}}>Junior Moderator</span>
                            <img src={"https://www.clipartmax.com/png/full/19-193882_shield-red-clip-art-at-clker-red-shield-logo-vector.png"} width={20} style={{position: "absolute", left: 8, top: 873.5}}></img>
                            <span style={{position: "absolute", left: 38, top: 874}}>Moderator Trainee</span>
                        </Container>
                    </Container>


                <span style={{paddingLeft: 5}}>Use the form below to create a new forum thread, or click an existing one to get started!</span>
                <br/>
                <span style={{position: "absolute", left: 360, top: 340, fontWeight: "bold"}}>{errorMessage}</span>
                <br/>
                <Row style={{position: "absolute", bottom: 25, left: 25, width: 200}}>
                    <Logout></Logout>
                </Row>
                <Container className={"border"} style={{paddingBottom: 30}}>
                    <CreateStage></CreateStage>
                </Container>


            </>
        );
    } else {
        content = (<>
            <Container style={{position: "absolute", left: 10, top: 10, width: 200}}>
                <a href={"https://yorksolutions.net/"} target={"_blank"}>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2NgIV8jhBEJHdeQQZ4iqWPX0VsL1Rrh3BdaTjZnCZLADD11RFsL9eSLbVokXJTZsFjbU&usqp=CAU"} width={200}></img></a>
            </Container>
            <Container>
                <span style={{fontWeight: "bolder", position: "absolute", left: 57, top: 200, fontSize: 60, fontFamily: "Times New Roman"}}>York</span>
            </Container>
            <Container>
                <span style={{position: "absolute", left: 57, top: 255, fontSize: 45, fontFamily: "Times New Roman", color: "gray"}}>Forums</span>
            </Container>
            <Container>
                <span style={{position: "absolute", left: 27.5, top: 303, fontSize: 25, fontFamily: "Times New Roman", color: "deepskyblue", fontStyle: "italic"}}>Trusted IT Advisors</span>
            </Container>
            <Container style={{position: "absolute", left: 27.5, top: 320, color: "black", width: 200, fontWeight: "bolder"}}>
                <hr/>
            </Container>
                <Row>
                    <Col>
                        Welcome to the forum! <br/>
                        Please log in to continue.
                        <br/> <br/>
                        <Login></Login>
                        <br/>
                        <span style={{position: "absolute", left: 250, top: 275, fontWeight: "bold"}}>{errorMessage}</span>
                    </Col>
                    <Col>
                        <Signup></Signup>
                    </Col>
                </Row>
            <br/> <br/>
            <h4 style={{position: "absolute", top: 420}}>Interested in joining the conversations below? Signup today!</h4>
            <Row style={{backgroundColor: "black", position: "absolute", top: 875, left: 0, lineHeight: 9, width: 5000}}>
                <span>a</span>
            </Row>
            <Container style={{position: "absolute", top: 885, left: 235, zIndex: 999}}>
                <img src={"https://2v51os3b9nxc2hzicx4cpfpo-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/vob-logo.jpg"}
                     width={105}></img>
            </Container>
            <Container style={{position: "absolute", left: 355, top: 882, zIndex: 999}}>
                <img src={"https://www.trustvets.com/images/TrustVets_Logo-Member-Badge-Veteran-Directory.png"}
                     width={110} ></img>
            </Container>
            <Container style={{position: "absolute", top: 885, left: 480 , zIndex: 999}}>
                <img src={"https://www.thinkit.co.uk/wp-content/uploads/2021/03/Think-IT-Logo-white-and-blue.png"}
                     width={175}></img>
            </Container>
            <Container style={{position: "absolute", top: 885, left: 652.5, zIndex: 999}}>
                <img src={"https://2v51os3b9nxc2hzicx4cpfpo-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/project-management-minnesota-pmi-mn.png"}></img>
            </Container>
            <Container>
                <span style={{color: "cornflowerblue",
                    position: "absolute",
                    top: 890,
                    left: 960,
                    zIndex: 999,
                    fontSize: 17,
                    fontWeight: "bold"}}>SOCIAL CONNECTIONS</span>
                <span style={{color: "cornflowerblue",
                    position: "absolute",
                    top: 889,
                    left: 1190,
                    zIndex: 999,
                    fontSize: 17,
                    fontWeight: "bold"}}>OUR LOCATIONS</span>
                <span className={"location"} style={{color: "white",
                    position: "absolute",
                    top: 915,
                    left: 1195,
                    zIndex: 999,
                    fontSize: 17,
                    fontWeight: "bold"}}>Westchester, IL</span>
                <span className={"location"} style={{color: "white",
                    position: "absolute",
                    top: 934,
                    left: 1197,
                    zIndex: 999,
                    fontSize: 17,
                    fontWeight: "bold"}}>Twin Cities, MN</span>
                <span className={"location"} style={{color: "white",
                    position: "absolute",
                    top: 953,
                    left: 1198,
                    zIndex: 999,
                    fontSize: 17,
                    fontWeight: "bold"}}>Nashville, TN</span>
            </Container>
            <Container style={{color: "cornflowerblue",
                position: "absolute",
                top: 889,
                left: 1370,
                zIndex: 999,
                fontSize: 17,
                fontWeight: "bold"}}>
                JOIN OUR TEAM
            </Container>
            <Container>
                <span className={"lightup"} style={{color: "white",
                    position: "absolute",
                    top: 915,
                    left: 1362,
                    zIndex: 999,
                    fontSize: 17,
                    fontWeight: "bold",}}>Seeking A New Career?</span>
                <span className={"lightup"} style={{color: "white",
                    position: "absolute",
                    top: 933,
                    left: 1388,
                    zIndex: 999,
                    fontSize: 17,
                    fontWeight: "bold",}}>News & Press</span>
                <span className={"lightup"} style={{color: "white",
                    position: "absolute",
                    top: 951,
                    left: 1398,
                    zIndex: 999,
                    fontSize: 17,
                    fontWeight: "bold",}}>Contact Us</span>
            </Container>
            <Container  style={{position: "absolute", top: 920, left: 955.5, zIndex: 999, width: 20}}>
                <img className={"icon"} src={"https://1000logos.net/wp-content/uploads/2016/11/facebook-symbol.jpg"} width={50}></img>
            </Container>
            <Container style={{position: "absolute", top: 920, left: 1000.5, zIndex: 999, width: 50}}>
                <img className={"icon"} src={"https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/03/17/cryptocurrency-price-john-mcafee-twitter.jpg?width=1200"} width={50}></img>
            </Container>
            <Container style={{position: "absolute", top: 920, left: 1045.5, zIndex: 999, width: 50}}>
                <img className={"icon"} src={"https://ytpr.co.ke/wp-content/uploads/2020/06/linkedin-icon-png-transparent-background-8.png"} width={38}></img>
            </Container>
            <Container style={{position: "absolute", top: 916, left: 1082.5, zIndex: 999, width: 50}}>
                <img className={"icon"} src={"https://i.pinimg.com/originals/64/c7/c8/64c7c86fd70cb2aea77b49fd340164b3.webp"} width={50}></img>
            </Container>
        </>)
     }
    return (
        <>
        <Container>
        {content}
            <br/>
            <Row style={{position: "relative", paddingLeft: 10, bottom: 30}}>
                <StageList></StageList>
            </Row>
        </Container>
        <StageDetails></StageDetails>

        </>
    )
}

export default App;
