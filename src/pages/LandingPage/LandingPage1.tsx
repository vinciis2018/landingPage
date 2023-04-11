import React from "react";
// import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Center,
  Stack,
  Text,
  Divider,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Button,
  SimpleGrid,
  // InputRightElement,
  // IconButton,
  Image,
} from "@chakra-ui/react";
import { Modal } from "react-bootstrap";

import Lottie from "lottie-react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
// import { IoSearchCircleSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { listScreens } from "../../Actions/screenActions";
// import HLoading from "components/atoms/HLoading";
// import MessageBox from "components/atoms/MessageBox";
// import { ContactUs, Screen } from "components/common";
// import { AtvertiseBox } from "components/common/AtvertiseBox";
import { motion } from "framer-motion";
// import { getCampaignList } from "Actions/campaignAction";
import landingPage1 from "../../assets/json/landingPage1.json";
import landingPage2 from "../../assets/json/landingPage2.json";
import landingPage3 from "../../assets/json/landingPage3.json";
import landingPage4 from "../../assets/json/landingPage4.json";
import landingPage5 from "../../assets/json/landingPage5.json";
import landingPage6 from "../../assets/json/landingPage6.json";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { faqs, textContent } from "../../config";

export function LandingPage1() {
  const navigate = useNavigate();
  const MotionFlex = motion(Flex);

  const [answer, setAnswer] = React.useState<any>(true);
  const [show, setShow] = React.useState<any>(false);

  const [c, setC] = React.useState<any>(0); // cpm
  const [f, setF] = React.useState<any>(0); // footfall
  const [t, setT] = React.useState<any>(0); // timeperiod
  const [h, setH] = React.useState<any>(0); // operational hours
  const [M, setM] = React.useState<any>(0); // Reach multiplier
  const [D, setD] = React.useState<any>(0); // screen diagonal
  const [L, setL] = React.useState<any>(0); // playlish length
  const [rent, setRent] = React.useState<any>(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAnswer = () => setAnswer(!answer);

  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const dispatch = useDispatch<any>();
  React.useEffect(() => {
    // console.log("userInfo : ", userInfo);
    // if (!loadingUserInfo && !userInfo && errorUserInfo) {
    //   navigate("/signin");
    // }
    // dispatch(getCampaignList());
    // dispatch(listScreens({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // setAnswer(answer);
  }, [dispatch, answer, rent]);

  const calculateRent = () => {
    const rentValue = (c * f * t * M * D) / ((L + 1) * h * 60 * 60 * 1000);
    console.log(rentValue);
    if (rentValue < 0.01) {
      setRent(0.01);
    } else {
      setRent(rentValue);
    }
    return rentValue;
  };

  return (
    <Box color="black.500" alignItems="center" mt="">
      <Center>
        <Stack>
          <Box style={{ display: "block", position: "initial" }}>
            <Modal
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={show}
              onHide={handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  Wandering how much can you earn? Calulate now !!!
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Flex align="center" justify="space-between">
                  <FormControl p="2">
                    <FormLabel px="1" htmlFor="share" fontSize="sm">
                      Expected CPM
                    </FormLabel>
                    <InputGroup>
                      <Input
                        placeholder="200"
                        size="lg"
                        py="1"
                        value={c}
                        onChange={(e) => setC(e.target.value)}
                      />
                    </InputGroup>
                    <Text p="1" fontSize="xs" color="#2BB3E0">
                      Average cost of reaching 1000 outdoor audiences is &#8377;
                      100 to &#8377; 500
                    </Text>
                  </FormControl>
                  <FormControl p="2">
                    <FormLabel htmlFor="share" fontSize="sm">
                      Average FPD
                    </FormLabel>
                    <InputGroup>
                      <Input
                        placeholder="50"
                        size="lg"
                        py="1"
                        value={f}
                        onChange={(e) => setF(e.target.value)}
                      />
                    </InputGroup>
                    <Text p="1" fontSize="xs" color="#2BB3E0">
                      Average daily footfall in front of your screen
                    </Text>
                  </FormControl>
                </Flex>
                <Flex align="center" justify="space-between">
                  <FormControl p="2">
                    <FormLabel px="1" htmlFor="share" fontSize="sm">
                      Expected TPS (in seconds)
                    </FormLabel>
                    <InputGroup>
                      <Input
                        placeholder="20"
                        size="lg"
                        py="1"
                        value={t}
                        onChange={(e) => setT(e.target.value)}
                      />
                      <Text p="2" fontSize="sm" color="#00000050">
                        secs
                      </Text>
                    </InputGroup>
                    <Text p="1" fontSize="xs" color="#2BB3E0">
                      Time period of one ad slot(in seconds) e.g 20 seconds for
                      one ad play
                    </Text>
                  </FormControl>
                  <FormControl p="2">
                    <FormLabel htmlFor="share" fontSize="sm">
                      Daily AOH (in hours)
                    </FormLabel>
                    <InputGroup>
                      <Input
                        placeholder="20"
                        size="lg"
                        py="1"
                        value={h}
                        onChange={(e) => setH(e.target.value)}
                      />
                      <Text p="2" fontSize="sm" color="#00000050">
                        hrs
                      </Text>
                    </InputGroup>
                    <Text p="1" fontSize="xs" color="#2BB3E0">
                      Average daily operational hours, e.g. 12 hours daily
                    </Text>
                  </FormControl>
                  <FormControl p="2">
                    <FormLabel htmlFor="share" fontSize="sm">
                      Screen Size (in inches)
                    </FormLabel>
                    <InputGroup>
                      <Input
                        placeholder="20"
                        size="lg"
                        py="1"
                        value={D}
                        onChange={(e) => setD(e.target.value)}
                      />
                      <Text p="2" fontSize="sm" color="#00000050">
                        inches
                      </Text>
                    </InputGroup>
                    <Text p="1" fontSize="xs" color="#2BB3E0">
                      Size of screen in terms of it's diagonal length, e.g. 55"
                    </Text>
                  </FormControl>
                </Flex>
                <Flex align="center" justify="space-between">
                  <FormControl p="2">
                    <FormLabel px="1" htmlFor="share" fontSize="sm">
                      Reach Multiplier
                    </FormLabel>
                    <InputGroup>
                      <Input
                        placeholder="20"
                        size="lg"
                        py="1"
                        value={M}
                        onChange={(e) => setM(e.target.value)}
                      />
                    </InputGroup>
                    <Text p="1" fontSize="xs" color="#2BB3E0">
                      Constant value that depends on the location of your
                      screen.
                    </Text>
                  </FormControl>
                  <FormControl p="2">
                    <FormLabel htmlFor="share" fontSize="sm">
                      Playlish length
                    </FormLabel>
                    <InputGroup>
                      <Input
                        placeholder="20"
                        size="lg"
                        py="1"
                        value={L}
                        onChange={(e) => setL(e.target.value)}
                      />
                    </InputGroup>
                    <Text p="1" fontSize="xs" color="#2BB3E0">
                      Total number of ads that will be playing on the screen
                    </Text>
                  </FormControl>
                </Flex>
              </Modal.Body>
              <Modal.Footer>
                <Flex align="center" justify="space-between">
                  <Text
                    p="1"
                    px="5"
                    fontSize={{ base: "sm", lg: "md" }}
                    color="green"
                  >
                    You can earn &#8377;
                    {rent.toFixed(2)} for {t} seconds of your screen time.
                  </Text>
                  <MotionFlex
                    flexDir="column"
                    role="group"
                    rounded="md"
                    shadow="card"
                    whileHover={{
                      translateY: -3,
                    }}
                    pos="relative"
                    zIndex="0"
                    align="center"
                  >
                    <Button
                      p="3"
                      variant="outline"
                      border="1px solid #FFFFFF"
                      borderRadius="27px"
                      color="#ffffff"
                      bgColor="#D7380E"
                      fontSize={{ base: "10", lg: "15" }}
                      onClick={calculateRent}
                    >
                      Calculate now
                    </Button>
                  </MotionFlex>
                </Flex>
              </Modal.Footer>
            </Modal>
          </Box>
          <Stack position="relative">
            <Box mt="-70" height={{ base: "", lg: "720px" }}>
              <Box className="bg-video-overlay"></Box>
              <video
                // height={{ base: "", lg: "628px" }}
                // as="video"
                id="bg-video"
                src="https://ipfs.io/ipfs/bafybeigo7quhsuzqtwoklopzi4soxhwf27eadslm7bkmzgayzcdcqyeeda"
                loop
                autoPlay
              />
            </Box>
            <Box className="bg-video-front">
              <Stack
                // mt={{ base: "-360", lg: "-600" }}
                alignItems="center"
                justify="center"
                pt={{ lg: "200", base: "" }}
              >
                <Box
                  alignItems="center"
                  p={{ lg: "10", base: "5" }}
                  bgColor="rgba(57, 57, 57, 0.6)"
                  border="2px solid #DCD2EA"
                  borderRadius="8px"
                  boxShadow="0px 12px 56px rgba(222, 200, 255, 0.4)"
                  backdrop-filter="blur(3px)"
                >
                  <Text
                    align="center"
                    color="#ffffff"
                    // fontFamily="Cantarella"
                    fontSize={{ base: "20", lg: "50" }}
                    fontWeight="bold"
                  >
                    YOUR SCREENS, FOR YOUR BUSINESS!!!
                  </Text>
                  <Text
                    p="5"
                    align="center"
                    color="#ffffff"
                    fontSize={{ base: "10", lg: "30" }}
                  >
                    Advertise your product, services and offerings,
                  </Text>
                  <Flex px="3" align="center" justify="space-around">
                    <MotionFlex
                      flexDir="column"
                      w="100%"
                      role="group"
                      rounded="md"
                      shadow="card"
                      whileHover={{
                        translateY: -3,
                      }}
                      pos="relative"
                      zIndex="0"
                      align="center"
                    >
                      <Button
                        width={{ base: "125px", lg: "300px" }}
                        p={{ lg: "5", base: "2" }}
                        variant="outline"
                        border="1px solid #FFFFFF"
                        borderRadius="27px"
                        color="#ffffff"
                        bgColor="#D7380E"
                        fontSize={{ base: "10", lg: "20" }}
                        // onClick={handleShow}
                      >
                        Start Free
                      </Button>
                    </MotionFlex>
                    {/* <MotionFlex
                      flexDir="column"
                      w="100%"
                      role="group"
                      rounded="md"
                      shadow="card"
                      whileHover={{
                        translateY: -3,
                      }}
                      pos="relative"
                      zIndex="0"
                      align="center"
                    >
                      <Button
                        width={{ base: "125px", lg: "250px" }}
                        p="3"
                        variant="outline"
                        border="2px solid #E6E6E6"
                        borderRadius="27px"
                        color="#E6E6E6"
                        // bgColor="#D7380E"
                        fontSize={{ base: "10", lg: "15" }}
                        onClick={handleShow}
                      >
                        Screen Rent Calculator
                      </Button>
                    </MotionFlex> */}
                  </Flex>
                </Box>
                <Box>
                  <Text
                    pt={{ lg: "100", base: "10" }}
                    align="center"
                    color="#ffffff"
                    fontSize={{ base: "10", lg: "20" }}
                  >
                    SCROLL TO EXPLORE
                  </Text>
                  <Divider color="#ffffff" pt="" />
                </Box>
              </Stack>
            </Box>
          </Stack>
          <Stack width="100%" height="100%">
            {/* <Flex align="center" className="gradient-container">
              <Box width="50vw">
                <Box
                  // width="679.13px"
                  height="100vh"
                  left="5.68px"
                  // top="551.3px"
                  style={{
                    // position: "relative",
                    background:
                      "linear-gradient(254.28deg, #A12E96 78.04%, #3008BD 159.11%)",
                    filter: "blur(157px)",
                  }}
                />
                <Box
                  // width="682.44px"
                  height="100vh"
                  left="3px"
                  // top="1127.38px"
                  style={{
                    // position: "relative",
                    background:
                      "linear-gradient(292.31deg, #57BDB8 100%, #1A142B 176.64%)",
                    filter: "blur(157px)",
                  }}
                />
              </Box>
              <Box
                // width="828.76px"
                width="50vw"
                height="100vh"
                // left={{ lg: "811.24px", base: "" }}
                // top="823.26px"
                style={{
                  // position: "relative",
                  background:
                    "linear-gradient(287.75deg, #8AF59C 100%, #BFBA4D 179.54%)",
                  filter: "blur(157px)",
                }}
              />
            </Flex> */}
            <Box
              alignSelf="end"
              width="50vw"
              position="absolute"
              className="gradient-container"
            >
              <Box
                // width="100%"
                height="50vh"
                style={{
                  // position: "relative",
                  background:
                    "linear-gradient(292.31deg, #57BDB8 100%, #1A142B 176.64%)",
                  filter: "blur(157px)",
                }}
              />
            </Box>

            {/* 1st */}
            <Stack align="center" width="100%" height="50%">
              <Box
                alignSelf="start"
                width="50vw"
                position="absolute"
                className="gradient-container"
              >
                <Box
                  // width="100%"
                  height="50vh"
                  style={{
                    // position: "relative",
                    background:
                      "linear-gradient(254.28deg, #A12E96 78.04%, #3008BD 159.11%)",
                    filter: "blur(157px)",
                  }}
                />
              </Box>
              <Text
                align="center"
                color="#000000"
                fontSize={{ base: "20", lg: "50" }}
                fontWeight="bold"
                pt="10"
              >
                Manage all your screens a one place
              </Text>
              <Flex
                px={{ lg: "20", base: "10" }}
                width="100%"
                align="center"
                justify="space-between"
              >
                <Stack px={{ lg: "5" }} alignItems="center">
                  <Stack align="center" width="100%" px="20" py="10">
                    <Lottie
                      animationData={landingPage4}
                      style={{ width: "50%" }}
                    />
                  </Stack>
                  <Box
                    alignItems="center"
                    p="1"
                    bgColor="#ffffff"
                    border="2px solid #DCD2EA"
                    borderRadius="8px"
                    boxShadow="0px 12px 48px rgba(0, 0, 0, 0.1)"
                    width="60%"
                  >
                    <Text
                      align="center"
                      color="#000000"
                      fontSize={{ base: "10", lg: "20" }}
                      fontWeight="bold"
                      p="2"
                    >
                      Fill your unused screens
                    </Text>
                    <Text
                      align="center"
                      color="#000000"
                      fontSize={{ base: "10", lg: "12" }}
                      px="2"
                      pb="2"
                    >
                      An open and free marketplace for buying and selling
                      digital outdoor advertising space
                    </Text>
                  </Box>
                </Stack>
                <Stack px={{ lg: "5" }} align="center">
                  <Stack align="center" width="100%">
                    <Lottie
                      animationData={landingPage5}
                      style={{ width: "50%" }}
                    />
                  </Stack>
                  <Box
                    alignItems="center"
                    p="1"
                    bgColor="#ffffff"
                    border="2px solid #DCD2EA"
                    borderRadius="8px"
                    boxShadow="0px 12px 48px rgba(0, 0, 0, 0.1)"
                    width="60%"
                  >
                    <Text
                      align="center"
                      color="#000000"
                      fontSize={{ base: "10", lg: "20" }}
                      fontWeight="bold"
                      p="2"
                    >
                      Customize your ad slots
                    </Text>
                    <Text
                      align="center"
                      color="#000000"
                      fontSize={{ base: "10", lg: "12" }}
                      pb="2"
                      px="2"
                    >
                      An open and free marketplace for buying and selling
                      digital outdoor advertising space
                    </Text>
                  </Box>
                </Stack>
                <Stack px={{ lg: "5" }} alignItems="center">
                  <Stack align="center" width="100%">
                    <Lottie
                      animationData={landingPage6}
                      style={{ width: "50%" }}
                    />
                  </Stack>
                  <Box
                    alignItems="center"
                    p="1"
                    bgColor="#ffffff"
                    border="2px solid #DCD2EA"
                    borderRadius="8px"
                    boxShadow="0px 12px 48px rgba(0, 0, 0, 0.1)"
                    width="60%"
                  >
                    <Text
                      align="center"
                      color="#000000"
                      fontSize={{ base: "10", lg: "20" }}
                      fontWeight="bold"
                      p="2"
                    >
                      Fill your unused screens
                    </Text>
                    <Text
                      align="center"
                      color="#000000"
                      fontSize={{ base: "10", lg: "12" }}
                      pb="2"
                      px="2"
                    >
                      An open and free marketplace for buying and selling
                      digital outdoor advertising space
                    </Text>
                  </Box>
                </Stack>
              </Flex>
            </Stack>

            {/* 2nd */}
            <Stack py="20" align="center" width="100%" height="50%">
              <Box
                alignSelf="start"
                width="50vw"
                position="absolute"
                className="gradient-container"
              >
                <Box
                  // width="100%"
                  height="50vh"
                  style={{
                    // position: "relative",
                    background:
                      "linear-gradient(287.75deg, #8AF59C 100%, #BFBA4D 179.54%)",
                    filter: "blur(157px)",
                  }}
                />
              </Box>
              <SimpleGrid gap="2" columns={[1, 2]} p={{ lg: "20", base: "10" }}>
                <Box>
                  <Image
                    width="100%"
                    rounded="8px"
                    src="https://ipfs.io/ipfs/bafybeihad6zquqsmmrfuznqiuphs5qb4ovw5dfxn73l624oixnkcfqfuq4"
                    alt=""
                    filter="drop-shadow(0px 12px 49px rgba(0, 0, 0, 0.1))"
                  />
                </Box>
                <Box pl={{ lg: "40", base: "10" }} alignSelf="center">
                  <Text
                    align="start"
                    color="#EC0000"
                    fontSize={{ base: "15", lg: "25" }}
                    fontWeight="bold"
                    px={{ lg: "10", base: "1" }}
                    // py={{ lg: "5", base: "2" }}
                  >
                    What's the wait for? Start early, start today!
                  </Text>
                  <Text
                    align="start"
                    color="#000000"
                    fontSize={{ base: "20", lg: "50" }}
                    fontWeight="bold"
                    px={{ lg: "10", base: "1" }}
                  >
                    Let your screens pay the bills!
                  </Text>
                  <Text
                    align="start"
                    color="#000000"
                    fontSize={{ base: "10", lg: "20" }}
                    // fontWeight="bold"
                    px={{ lg: "10", base: "1" }}
                    py={{ lg: "5", base: "2" }}
                  >
                    Get complete ownership of your screen! Design your own
                    campaign or connect with brands to fill in the slots and
                    earn some extra revenue. Your screens are your assets, so
                    create ad campaigns and start earning with MONAD. And that
                    too, with no extra charges! {"\n"} What’s the wait for?
                    Start early, Start today!
                  </Text>
                </Box>
              </SimpleGrid>
            </Stack>

            {/* 3rd */}
            <Stack align="center" width="100%" height="50%">
              <Text
                align="center"
                color="#000000"
                fontSize={{ base: "20", lg: "50" }}
                fontWeight="bold"
                pb="2"
              >
                How to become a screen owner
              </Text>
              <SimpleGrid
                gap="2"
                // gridTemplateColumns={["1fr", "1fr", "1fr", "1fr", "1fr"]}
                columns={[5]}
                px={{ lg: "60", base: "10" }}
                py="20"
              >
                <Box
                  width="100%"
                  bgColor="#ffffff"
                  border="1px solid #2BB3E0"
                  borderRadius="4px"
                  shadow="0px 4px 48px rgba(0, 0, 0, 0.07)"
                >
                  <Stack align="center" width="100%" p="10">
                    <Lottie
                      animationData={landingPage1}
                      // style={{ width: "200px", height: "200px" }}
                    />
                  </Stack>
                  <Text
                    align="center"
                    color="#D7380E"
                    fontSize={{ base: "15", lg: "20" }}
                    fontWeight="bold"
                    pt=""
                    pb="2"
                  >
                    Sign up
                  </Text>
                  <Text
                    align="center"
                    color="#000000"
                    fontSize={{ base: "10", lg: "12" }}
                    pb="2"
                  >
                    Install Mona TV on your screen and sign up on MONAD
                  </Text>
                </Box>
                <Box
                  // border="1px solid #2BB3E0"
                  // width="50%"
                  pl="10"
                  alignItems="start"
                  alignSelf="center"
                >
                  <MdOutlineArrowForwardIos size="50px" color="#2BB3E0" />
                </Box>
                <Box
                  width="100%"
                  bgColor="#ffffff"
                  border="1px solid #2BB3E0"
                  borderRadius="4px"
                  shadow="0px 4px 48px rgba(0, 0, 0, 0.07)"
                >
                  <Stack align="center" width="100%" p="10">
                    <Lottie
                      animationData={landingPage2}
                      // style={{ width: "200px", height: "200px" }}
                    />
                  </Stack>
                  <Text
                    align="center"
                    color="#D7380E"
                    fontSize={{ base: "15", lg: "20" }}
                    fontWeight="bold"
                    pb="2"
                  >
                    Register Screen
                  </Text>
                  <Text
                    align="center"
                    color="#000000"
                    fontSize={{ base: "10", lg: "10" }}
                    // fontWeight="bold"
                    pb="2"
                  >
                    Upload your ad campaigns and have a happy advertising
                  </Text>
                </Box>
                <Box
                  // border="1px solid #2BB3E0"
                  // width="50%"
                  pl="10"
                  alignItems="start"
                  alignSelf="center"
                >
                  <MdOutlineArrowForwardIos size="50px" color="#2BB3E0" />
                </Box>
                <Box
                  width="100%"
                  bgColor="#ffffff"
                  alignItems="center"
                  border="1px solid #2BB3E0"
                  borderRadius="4px"
                  shadow="0px 4px 48px rgba(0, 0, 0, 0.07)"
                >
                  <Stack
                    // align="center"
                    // border="1px solid #2BB3E0"
                    width="100%"
                    p="10"
                  >
                    <Lottie
                      animationData={landingPage3}
                      // style={{ width: "100px", height: "100px" }}
                    />
                  </Stack>
                  <Text
                    align="center"
                    color="#D7380E"
                    fontSize={{ base: "15", lg: "20" }}
                    fontWeight="bold"
                    pb="2"
                  >
                    Start earning
                  </Text>
                  <Text
                    align="center"
                    color="#000000"
                    fontSize={{ base: "10", lg: "10" }}
                    // fontWeight="bold"
                    pb="2"
                  >
                    How to become a screen owner
                  </Text>
                </Box>
              </SimpleGrid>
              <Button
                width={{ base: "125px", lg: "250px" }}
                p="5"
                variant="outline"
                border="1px solid #FFFFFF"
                borderRadius="27px"
                color="#ffffff"
                bgColor="#D7380E"
                fontSize={{ base: "10", lg: "20" }}
                // fontWeight="600"
                // mt="20"
                // as={RouterLink}
                // to={`/all-screens`}
              >
                Register now
              </Button>
            </Stack>

            {/* 4th */}
            <Stack py="10" align="center" width="100%" height="50%">
              <Text
                align="center"
                color="#000000"
                fontSize={{ base: "20", lg: "60" }}
                letterSpacing="300%"
                fontWeight="bold"
                p="10"
                pt="20"
              >
                O U R P A R T N E R S
              </Text>
              <Box
                alignSelf="start"
                width="100%"
                position="absolute"
                className="gradient-container"
              >
                <Box
                  // width="100%"
                  height={{ lg: "50vh", base: "25vh" }}
                  style={{
                    // position: "relative",
                    background:
                      "linear-gradient(99.63deg, #5994F0 0%, #F2C47D 86.71%)",
                    // filter: "blur(157px)",
                  }}
                />
              </Box>
              {/* <Stack alignSelf="center" height={{ lg: "50vh", base: "25vh" }}> */}
              <Flex>
                <Carousel
                  showArrows={false}
                  autoPlay={true}
                  infiniteLoop
                  showThumbs={false}
                  interval={3000}
                  animationHandler={"fade"}
                  showStatus={false}
                  renderIndicator={(
                    onClickHandler,
                    isSelected,
                    index,
                    label
                  ) => {
                    const defStyle = {
                      marginLeft: 20,
                      color: "white",
                      cursor: "pointer",
                    };
                    const style = isSelected
                      ? { ...defStyle, color: "red" }
                      : { ...defStyle };
                    return (
                      <span
                        style={style}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        // value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        aria-label={`${label} ${index + 1}`}
                      >
                        {""}
                      </span>
                    );
                  }}
                >
                  {textContent.ourPartners.map((image: any) => (
                    <Box key={image.id}>
                      <Image
                        height={{ lg: "30vh", base: "25vh" }}
                        src={image.src}
                        alt={image.alt}
                      />
                    </Box>
                  ))}
                </Carousel>
                <Carousel
                  showArrows={false}
                  autoPlay={true}
                  infiniteLoop
                  showThumbs={false}
                  interval={3000}
                  animationHandler={"fade"}
                  showStatus={false}
                  renderIndicator={(
                    onClickHandler,
                    isSelected,
                    index,
                    label
                  ) => {
                    const defStyle = {
                      marginLeft: 20,
                      color: "white",
                      cursor: "pointer",
                    };
                    const style = isSelected
                      ? { ...defStyle, color: "red" }
                      : { ...defStyle };
                    return (
                      <span
                        style={style}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        // value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        aria-label={`${label} ${index + 1}`}
                      >
                        {""}
                      </span>
                    );
                  }}
                >
                  {textContent.ourPartners.map((image: any) => (
                    <Box key={image.id}>
                      <Image
                        height={{ lg: "30vh", base: "25vh" }}
                        src={image.src}
                        alt={image.alt}
                      />
                    </Box>
                  ))}
                </Carousel>
                <Carousel
                  showArrows={false}
                  autoPlay={true}
                  infiniteLoop
                  showThumbs={false}
                  interval={3000}
                  animationHandler={"fade"}
                  showStatus={false}
                  renderIndicator={(
                    onClickHandler,
                    isSelected,
                    index,
                    label
                  ) => {
                    const defStyle = {
                      marginLeft: 20,
                      color: "white",
                      cursor: "pointer",
                    };
                    const style = isSelected
                      ? { ...defStyle, color: "red" }
                      : { ...defStyle };
                    return (
                      <span
                        style={style}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        // value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        aria-label={`${label} ${index + 1}`}
                      >
                        {""}
                      </span>
                    );
                  }}
                >
                  {textContent.ourPartners.map((image: any) => (
                    <Box key={image.id}>
                      <Image
                        height={{ lg: "30vh", base: "25vh" }}
                        src={image.src}
                        alt={image.alt}
                      />
                    </Box>
                  ))}
                </Carousel>
                <Carousel
                  showArrows={false}
                  autoPlay={true}
                  infiniteLoop
                  showThumbs={false}
                  interval={3000}
                  animationHandler={"fade"}
                  showStatus={false}
                  renderIndicator={(
                    onClickHandler,
                    isSelected,
                    index,
                    label
                  ) => {
                    const defStyle = {
                      marginLeft: 20,
                      color: "white",
                      cursor: "pointer",
                    };
                    const style = isSelected
                      ? { ...defStyle, color: "red" }
                      : { ...defStyle };
                    return (
                      <span
                        style={style}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        // value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        aria-label={`${label} ${index + 1}`}
                      >
                        {""}
                      </span>
                    );
                  }}
                >
                  {textContent.ourPartners.map((image: any) => (
                    <Box key={image.id}>
                      <Image
                        height={{ lg: "30vh", base: "25vh" }}
                        src={image.src}
                        alt={image.alt}
                      />
                    </Box>
                  ))}
                </Carousel>
              </Flex>
              {/* </Stack> */}
              <Flex></Flex>
            </Stack>

            {/* 5th */}
            <Stack align="center">
              <Text
                align="center"
                color="#000000"
                fontSize={{ base: "20", lg: "50" }}
                fontWeight="bold"
                py="10"
              >
                What our clients said
              </Text>
              <Box p="10" width="50%">
                <Carousel
                  showArrows={false}
                  autoPlay={true}
                  infiniteLoop
                  showThumbs={false}
                  interval={3000}
                  // animationHandler={"fade"}
                  showStatus={false}
                  // renderIndicator={(
                  //   onClickHandler,
                  //   isSelected,
                  //   index,
                  //   label
                  // ) => {
                  //   const defStyle = {
                  //     // marginLeft: 20,
                  //     color: "white",
                  //     cursor: "pointer",
                  //   };
                  //   const style = isSelected
                  //     ? { ...defStyle, color: "red" }
                  //     : { ...defStyle };
                  //   return (
                  //     <span
                  //       style={style}
                  //       onClick={onClickHandler}
                  //       onKeyDown={onClickHandler}
                  //       // value={index}
                  //       key={index}
                  //       role="button"
                  //       tabIndex={0}
                  //       aria-label={`${label} ${index + 1}`}
                  //     >
                  //       {""}
                  //     </span>
                  //   );
                  // }}
                >
                  {textContent.testimonial.map((testi: any, index: any) => (
                    <Flex px="">
                      <Stack align="center" px="20">
                        <Box
                          height="160px"
                          width="160px"
                          borderRadius="160px"
                          // border="1px solid black"
                        >
                          <Image
                            height="160px"
                            width="160px"
                            src="https://ipfs.io/ipfs/bafkreibe3wvggy6rqxyp7yyku52qohcmqcgrb6tnrpkdsncbakge4x24y4"
                            alt=""
                          />
                        </Box>
                        <Text
                          align="center"
                          color="#000000"
                          fontSize={{ base: "15", lg: "20" }}
                          fontWeight="bold"
                          pt="1"
                        >
                          {testi.name}
                        </Text>
                        <Text
                          align="center"
                          color="#000000"
                          fontSize={{ base: "10", lg: "12" }}
                          fontWeight="bold"
                          pb="1"
                        >
                          {testi.designation}
                        </Text>
                      </Stack>
                      <Box
                        alignItems="center"
                        p={{ lg: "10", base: "5" }}
                        bgColor="#f3f3f3"
                        // border="2px solid #DCD2EA"
                        borderRadius="24px"
                        boxShadow="0px 19px 56px rgba(222, 200, 255, 0.6)"
                        width="60%"
                        height="50%"
                      >
                        <Text
                          align="start"
                          color="#000000"
                          fontSize={{ base: "10", lg: "15" }}
                          fontWeight="bold"
                          px="1"
                          // width="50%"
                        >
                          {testi.comment}
                        </Text>
                      </Box>
                    </Flex>
                  ))}
                </Carousel>
              </Box>
            </Stack>

            {/* 6th */}
            <Stack align="center">
              <Text
                align="center"
                color="#000000"
                fontSize={{ base: "20", lg: "50" }}
                fontWeight="bold"
                pt="20"
                pb="10"
              >
                Frequently asked questions
              </Text>
              <Box width="60%">
                <Stack p="5">
                  <Divider pt="5" color="#00000050" />
                  {faqs.screen.map((faq: any, index: any) => (
                    <Box onClick={handleAnswer}>
                      <Flex align="center" justify="space-between">
                        <Text
                          align="start"
                          color="#000000"
                          fontSize={{ base: "15", lg: "20" }}
                          fontWeight="bold"
                          py="2"
                        >
                          How to start using the screen?
                        </Text>
                        {answer ? (
                          <SlArrowUp size="20px" color="#00000070" />
                        ) : (
                          <SlArrowDown size="20px" color="#00000070" />
                        )}
                      </Flex>
                      {answer && (
                        <Text
                          align="start"
                          color="#000000"
                          fontSize={{ base: "10", lg: "12" }}
                          // fontWeight="bold"
                          py="2"
                          pb="5"
                        >
                          You can start earning as soon as you start deploying
                          ads.
                        </Text>
                      )}
                      <Divider pb="" color="#00000050" />
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>

            {/* 7th */}
            <Stack py="" align="center" width="100%">
              <Box
                alignSelf="start"
                width="100%"
                position="absolute"
                // className="gradient-container"
              >
                <Box
                  // width="100%"
                  height={{ lg: "50vh", base: "25vh" }}
                  style={{
                    // position: "relative",
                    backgroundImage:
                      "url(https:ipfs.io/ipfs/bafkreiebftjr6swjxdfc4wlhfcx7zmtpnjsap6hk5dbwp3ivfzqdblfebi)",
                    // filter: "blur(157px)",
                    objectFit: "cover",
                    zIndex: "-1",
                  }}
                />
              </Box>
              <Stack alignSelf="center" height={{ lg: "50vh", base: "25vh" }}>
                <Text
                  align="center"
                  color="#000000"
                  fontSize={{ base: "20", lg: "40" }}
                  fontWeight="bold"
                  pt="10"
                >
                  It's time to advertise with MONAD!
                </Text>
              </Stack>
              {/* <Box
                  width="100%"
                  height="100%"
                  style={{
                    // position: "relative",
                    background:
                      "linear-gradient(254.28deg, #A12E96 78.04%, #3008BD 159.11%)",
                    // filter: "blur(157px)",
                  }}
                /> */}
              <Flex></Flex>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    </Box>
  );
}
