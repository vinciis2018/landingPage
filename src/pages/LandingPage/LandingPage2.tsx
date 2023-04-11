import React from "react";
// import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Flex,
  Center,
  Stack,
  Text,
  Divider,
  // FormControl,
  // FormLabel,
  // Input,
  // InputGroup,
  Button,
  SimpleGrid,
  // InputRightElement,
  // IconButton,
  Image,
} from "@chakra-ui/react";
// import { Modal } from "react-bootstrap";
import Lottie from "lottie-react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { listScreens } from "../../Actions/screenActions";
// import HLoading from "components/atoms/HLoading";
// import MessageBox from "components/atoms/MessageBox";
// import { ContactUs, Screen } from "components/common";
// import { AtvertiseBox } from "components/common/AtvertiseBox";
import { motion } from "framer-motion";
// import { getCampaignList } from "Actions/campaignAction";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import progressBar from "../../assets/json/progressBar.json";
import { faqs } from "../../config";

export function LandingPage2() {
  const navigate = useNavigate();
  const MotionFlex = motion(Flex);

  const [answer, setAnswer] = React.useState<any>(true);

  const [c, setC] = React.useState<any>(0); // cpm
  const [f, setF] = React.useState<any>(0); // footfall
  const [t, setT] = React.useState<any>(0); // timeperiod
  const [h, setH] = React.useState<any>(0); // operational hours
  const [M, setM] = React.useState<any>(0); // Reach multiplier
  const [D, setD] = React.useState<any>(0); // screen diagonal
  const [L, setL] = React.useState<any>(0); // playlish length
  const [rent, setRent] = React.useState<any>(0);

  const handleAnswer = (index: any) => {
    // newQuestions[index].question =
    setAnswer(!answer);
  };

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

  const cards = [
    {
      id: 1,
      alt: "a",
      src: "https://ipfs.io/ipfs/bafkreig5dkemxfslmbpfhtr7233zn3xg7yokmkzhxnzsihrpejwicvug2e",
    },
    {
      id: 2,
      alt: "b",
      src: "https://ipfs.io/ipfs/bafkreicuhkyqnjg3vei2kxhplal4yycngu66fv5ab63gsdzr3ecfjslree",
    },
  ];
  const cards1 = [
    {
      id: 1,
      alt: "a",
      src: "https://ipfs.io/ipfs/bafkreig5dkemxfslmbpfhtr7233zn3xg7yokmkzhxnzsihrpejwicvug2e",
    },
    {
      id: 2,
      alt: "b",
      src: "https://ipfs.io/ipfs/bafkreicuhkyqnjg3vei2kxhplal4yycngu66fv5ab63gsdzr3ecfjslree",
    },
  ];
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
          <Stack position="relative">
            <Box mt="-70" height={{ base: "", lg: "720px" }}>
              <Image
                // height={{ base: "", lg: "628px" }}
                // as="video"
                id="bg-video"
                src="https://ipfs.io/ipfs/bafkreih4pym7p6zfv7miol4h3sffz7yzbekuimosut5qt5jgz7frohbtta"
              />
            </Box>
            <Box className="bg-video-front">
              <Stack
                mt={{ base: "", lg: "-100" }}
                alignItems="center"
                justify="center"
                pt={{ lg: "100", base: "" }}
              >
                <Flex px="40" align="top" justify="space-around">
                  <Box px="20">
                    <Text
                      pt={{ lg: "100", base: "" }}
                      align="start"
                      color="#ffffff"
                      fontSize={{ base: "10", lg: "50" }}
                    >
                      Change the way you advertise
                    </Text>
                    <Text
                      // pt={{ lg: "100", base: "" }}
                      align="start"
                      color="#ffffff"
                      fontSize={{ base: "10", lg: "20" }}
                    >
                      Earn more with your ads now! Monad empowers you with
                      cutting-edge technology while connecting you to the world
                      in a smarter way.
                    </Text>
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
                      align="start"
                      py="10"
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
                  </Box>
                  <Box
                    alignItems="center"
                    border="2px solid #DCD2EA"
                    borderRadius="8px"
                    boxShadow="0px 12px 56px rgba(222, 200, 255, 0.4)"
                    as="video"
                    src="https://ipfs.io/ipfs/bafybeihlyh3xxnv3k3dbmfvecy56kj6lt5pghbjycsnm5jrbhgoliw4r2e"
                    loop
                    autoPlay
                    width={{ lg: "50%", base: "50%" }}
                  />
                </Flex>
              </Stack>
            </Box>
          </Stack>
          <Stack width="100%" height="100%">
            {/* 1st */}
            <Stack align="start" width="100%" height="50%">
              <Text
                align="start"
                color="#000000"
                fontSize={{ base: "20", lg: "40" }}
                fontWeight="bold"
                pt="20"
                pb="10"
                px="20"
              >
                Manage all your screens a one place
              </Text>
              <Flex
                px={{ lg: "20", base: "10" }}
                width="100%"
                align="center"
                justify="space-between"
              >
                <Box px={{ lg: "5" }} alignItems="center">
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
                    align="start"
                    py=""
                  >
                    <Box
                      alignItems="center"
                      p="1"
                      bgColor="#ffffff"
                      border="2px solid #DCD2EA"
                      borderRadius="8px"
                      boxShadow="0px 12px 48px rgba(0, 0, 0, 0.1)"
                    >
                      <Box>
                        <Image
                          width="100%"
                          height="100%"
                          alt=""
                          src="https://ipfs.io/ipfs/bafkreid2gaomouglfuorfet7i62ekd65fm3rhvuuba2bxnkd7xyg44rewa"
                        />
                      </Box>
                      <Text
                        align="start"
                        color="#000000"
                        fontSize={{ base: "10", lg: "25" }}
                        fontWeight="bold"
                        pt="5"
                        px="10"
                      >
                        Fill your unused screens
                      </Text>
                      <Text
                        align="start"
                        color="#000000"
                        fontSize={{ base: "10", lg: "12" }}
                        px="10"
                        pb="5"
                      >
                        An open and free marketplace for buying and selling
                        digital outdoor advertising space
                      </Text>
                    </Box>
                  </MotionFlex>
                </Box>

                <Box px={{ lg: "5" }} alignItems="center">
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
                    align="start"
                    py=""
                  >
                    <Box
                      alignItems="center"
                      p="1"
                      bgColor="#ffffff"
                      border="2px solid #DCD2EA"
                      borderRadius="8px"
                      boxShadow="0px 12px 48px rgba(0, 0, 0, 0.1)"
                    >
                      <Box>
                        <Image
                          width="100%"
                          height="100%"
                          alt=""
                          src="https://ipfs.io/ipfs/bafkreiaado2rhi7ezvjc2ajdanm7hbim5c2a7jkzt5thgteoi3newfo2ke"
                        />
                      </Box>
                      <Text
                        align="start"
                        color="#000000"
                        fontSize={{ base: "10", lg: "25" }}
                        fontWeight="bold"
                        pt="5"
                        px="10"
                      >
                        Customize your ad slots
                      </Text>
                      <Text
                        align="start"
                        color="#000000"
                        fontSize={{ base: "10", lg: "12" }}
                        px="10"
                        pb="5"
                      >
                        An open and free marketplace for buying and selling
                        digital outdoor advertising space
                      </Text>
                    </Box>
                  </MotionFlex>
                </Box>

                <Box px={{ lg: "5" }} alignItems="center">
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
                    align="start"
                    // py="10"
                  >
                    <Box
                      alignItems="center"
                      p="1"
                      bgColor="#ffffff"
                      border="2px solid #DCD2EA"
                      borderRadius="8px"
                      boxShadow="0px 12px 48px rgba(0, 0, 0, 0.1)"
                    >
                      <Box>
                        <Image
                          width="100%"
                          height="100%"
                          alt=""
                          src="https://ipfs.io/ipfs/bafkreifjbbds7fao74rda7he7o5tprfbvlutb5xbvme37jj5untivwtnim"
                        />
                      </Box>
                      <Text
                        align="start"
                        color="#000000"
                        fontSize={{ base: "10", lg: "25" }}
                        fontWeight="bold"
                        pt="5"
                        px="10"
                      >
                        Fill your unused screens
                      </Text>
                      <Text
                        align="start"
                        color="#000000"
                        fontSize={{ base: "10", lg: "12" }}
                        pb="5"
                        px="10"
                      >
                        An open and free marketplace for buying and selling
                        digital outdoor advertising space
                      </Text>
                    </Box>
                  </MotionFlex>
                </Box>
              </Flex>
              <SimpleGrid
                px={{ lg: "20", base: "10" }}
                // width="100%"
                // align="top"
                // justify="space-between"
                pt="20"
                columns={[3]}
              >
                <Box width="100%" px={{ lg: "5" }} alignItems="center">
                  <Text
                    pb="5"
                    fontSize={{ base: "10", lg: "40" }}
                    fontWeight="bold"
                  >
                    Grow with MONAD
                  </Text>
                  <Divider
                    width="25%"
                    border="5px solid red"
                    borderRadius="8px"
                  />
                </Box>
                {/* <SimpleGrid columns={[2]} gap="4"> */}
                <Box px={{ lg: "5" }} alignItems="center">
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
                    align="start"
                    py=""
                  >
                    <Box
                      alignItems="center"
                      p="1"
                      bgColor="#ffffff"
                      border="2px solid #DCD2EA"
                      borderRadius="8px"
                      boxShadow="0px 12px 48px rgba(0, 0, 0, 0.1)"
                    >
                      <Stack align="start" width="100%" pt="5" px="2">
                        <Lottie
                          animationData={progressBar}
                          interactivity={{
                            mode: "cursor",
                            actions: [
                              {
                                position: { x: [0, 1], y: [0, 1] },
                                type: "loop",
                                frames: [0, 30],
                              },
                            ],
                          }}
                          style={{ width: "100%" }}
                        />
                      </Stack>
                      <Text
                        align="start"
                        color="#000000"
                        fontSize={{ base: "10", lg: "25" }}
                        fontWeight="bold"
                        px="6"
                        py="2"
                      >
                        Customize your ad slots
                      </Text>
                      <Text
                        align="start"
                        color="#000000"
                        fontSize={{ base: "10", lg: "12" }}
                        pb="2"
                        px="6"
                      >
                        An open and free marketplace for buying and selling
                        digital outdoor advertising space
                      </Text>
                    </Box>
                  </MotionFlex>
                </Box>
                <Box px={{ lg: "5" }} alignItems="center">
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
                    align="start"
                    py=""
                  >
                    <Box
                      alignItems="center"
                      p="1"
                      bgColor="#ffffff"
                      border="2px solid #DCD2EA"
                      borderRadius="8px"
                      boxShadow="0px 12px 48px rgba(0, 0, 0, 0.1)"
                    >
                      <Stack align="start" width="100%" pt="5" px="2">
                        <Lottie
                          animationData={progressBar}
                          interactivity={{
                            mode: "cursor",
                            actions: [
                              {
                                position: { x: [0, 1], y: [0, 1] },
                                type: "loop",
                                frames: [0, 30],
                              },
                            ],
                          }}
                          style={{ width: "100%" }}
                        />
                      </Stack>
                      <Text
                        align="start"
                        color="#000000"
                        fontSize={{ base: "10", lg: "25" }}
                        fontWeight="bold"
                        px="6"
                        py="2"
                      >
                        Fill your unused screens
                      </Text>
                      <Text
                        align="start"
                        color="#000000"
                        fontSize={{ base: "10", lg: "12" }}
                        pb="2"
                        px="6"
                      >
                        An open and free marketplace for buying and selling
                        digital outdoor advertising space
                      </Text>
                    </Box>
                  </MotionFlex>
                </Box>
                {/* </SimpleGrid> */}
              </SimpleGrid>
            </Stack>

            {/* 2nd */}
            <Stack align="center" width="100%" height="50%">
              <Text
                align="start"
                width="100%"
                // color="#EC0000"
                fontSize={{ base: "30", lg: "40" }}
                fontWeight="bold"
                px={{ lg: "20", base: "10" }}
                py={{ lg: "20", base: "10" }}
              >
                Deploy your campaign in few steps
              </Text>
              <Flex width="100%" px="10" justify="space-between">
                <Box
                  // border="1px solid black"
                  px={{ lg: "10", base: "10" }}
                  alignSelf=""
                >
                  <Flex py="3" align="center">
                    <Stack
                      height={{ lg: "50px", base: "71px" }}
                      width={{ lg: "50px", base: "150px" }}
                      alignSelf="center"
                      bgColor="#FD3D3D"
                      borderRadius={{ lg: "15px", base: "26px" }}
                    >
                      <Text
                        align="center"
                        color="#ffffff"
                        fontWeight="bold"
                        fontSize={{ lg: "20", base: "20" }}
                        p={{ lg: "3", base: "5" }}
                      >
                        1
                      </Text>
                    </Stack>
                    <Box px="5">
                      <Text
                        align="start"
                        color="#000000"
                        fontSize={{ base: "15", lg: "25" }}
                        fontWeight="bold"
                        px={{ lg: "10", base: "1" }}
                        py={{ lg: "2", base: "1" }}
                      >
                        Choose location
                      </Text>
                      <Text
                        align="start"
                        color="#000000"
                        fontSize={{ base: "10", lg: "12" }}
                        // fontWeight="bold"
                        px={{ lg: "10", base: "1" }}
                        py=""
                      >
                        Choose your screen according to your preferred
                        demographic area
                      </Text>
                    </Box>
                  </Flex>
                  <Flex py="3">
                    <Stack
                      height={{ lg: "50px", base: "71px" }}
                      width={{ lg: "50px", base: "150px" }}
                      alignSelf="center"
                      bgColor="#FD3D3D"
                      borderRadius={{ lg: "15px", base: "26px" }}
                    >
                      <Text
                        align="center"
                        color="#ffffff"
                        fontWeight="bold"
                        fontSize={{ lg: "20", base: "20" }}
                        p={{ lg: "3", base: "5" }}
                      >
                        1
                      </Text>
                    </Stack>
                    <Box px="5">
                      <Text
                        align="start"
                        color="#000000"
                        fontSize={{ base: "15", lg: "25" }}
                        fontWeight="bold"
                        px={{ lg: "10", base: "1" }}
                        py={{ lg: "2", base: "1" }}
                      >
                        Choose location
                      </Text>
                      <Text
                        align="start"
                        color="#000000"
                        fontSize={{ base: "10", lg: "12" }}
                        // fontWeight="bold"
                        px={{ lg: "10", base: "1" }}
                        py=""
                      >
                        Choose your screen according to your preferred
                        demographic area
                      </Text>
                    </Box>
                  </Flex>
                  <Flex py="3">
                    <Stack
                      height={{ lg: "50px", base: "71px" }}
                      width={{ lg: "50px", base: "150px" }}
                      alignSelf="center"
                      bgColor="#FD3D3D"
                      borderRadius={{ lg: "15px", base: "26px" }}
                    >
                      <Text
                        align="center"
                        color="#ffffff"
                        fontWeight="bold"
                        fontSize={{ lg: "20", base: "20" }}
                        p={{ lg: "3", base: "5" }}
                      >
                        1
                      </Text>
                    </Stack>
                    <Box px="5">
                      <Text
                        align="start"
                        color="#000000"
                        fontSize={{ base: "15", lg: "25" }}
                        fontWeight="bold"
                        px={{ lg: "10", base: "1" }}
                        py={{ lg: "2", base: "1" }}
                      >
                        Choose location
                      </Text>
                      <Text
                        align="start"
                        color="#000000"
                        fontSize={{ base: "10", lg: "12" }}
                        // fontWeight="bold"
                        px={{ lg: "10", base: "1" }}
                        py=""
                      >
                        Choose your screen according to your preferred
                        demographic area
                      </Text>
                    </Box>
                  </Flex>
                  <Flex py="3">
                    <Stack
                      height={{ lg: "50px", base: "71px" }}
                      width={{ lg: "50px", base: "150px" }}
                      alignSelf="center"
                      bgColor="#FD3D3D"
                      borderRadius={{ lg: "15px", base: "26px" }}
                    >
                      <Text
                        align="center"
                        color="#ffffff"
                        fontWeight="bold"
                        fontSize={{ lg: "20", base: "20" }}
                        p={{ lg: "3", base: "5" }}
                      >
                        1
                      </Text>
                    </Stack>
                    <Box px="5">
                      <Text
                        align="start"
                        color="#000000"
                        fontSize={{ base: "15", lg: "25" }}
                        fontWeight="bold"
                        px={{ lg: "10", base: "1" }}
                        py={{ lg: "2", base: "1" }}
                      >
                        Choose location
                      </Text>
                      <Text
                        align="start"
                        color="#000000"
                        fontSize={{ base: "10", lg: "12" }}
                        // fontWeight="bold"
                        px={{ lg: "10", base: "1" }}
                        py=""
                      >
                        Choose your screen according to your preferred
                        demographic area
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Box px="20">
                  <Image
                    width="100%"
                    height={{ lg: "100%", base: "100%" }}
                    rounded="8px"
                    src="https://ipfs.io/ipfs/bafkreigpzefl472nh43zksmxbgggc3blepxzs5sm5bi7it4bz6smt6q3qe"
                    alt=""
                    filter="drop-shadow(0px 12px 49px rgba(0, 0, 0, 0.1))"
                  />
                </Box>
              </Flex>
            </Stack>

            {/* 4th */}
            <Stack py="5" align="center" width="100%" height="50%">
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
                  {cards.map((image: any) => (
                    <Box key={image.id}>
                      <Box
                        height={{ lg: "100%", base: "100%" }}
                        alignItems="center"
                        p="1"
                        bgColor="#ffffff"
                        border="2px solid #DCD2EA"
                        borderRadius="8px"
                        boxShadow="0px 12px 48px rgba(0, 0, 0, 0.1)"
                        alignSelf="center"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width="100%"
                          rounded="8px"
                          filter="drop-shadow(0px 12px 49px rgba(0, 0, 0, 0.1))"
                        />
                      </Box>
                      <Stack align="center">
                        <Button
                          width={{ base: "125px", lg: "300px" }}
                          mt="-10"
                          p={{ lg: "5", base: "2" }}
                          variant="outline"
                          border="1px solid #00000050"
                          // borderRadius="27px"
                          // color="#ffffff"
                          bgColor="#fffff9"
                          fontSize={{ base: "10", lg: "12" }}
                        >
                          City Mall, <br /> Gurgaon
                        </Button>
                      </Stack>
                    </Box>
                  ))}
                </Carousel>
              </Flex>
              {/* </Stack> */}
              <Flex></Flex>
            </Stack>

            {/* 6th */}
            <Stack align="center">
              {faqs.brand.map((faq: any, index: any) => (
                <Box
                  width="60%"
                  key={index}
                  border="2px solid #DCD2EA"
                  borderRadius="8px"
                >
                  <Stack p="5">
                    <Box onClick={() => handleAnswer(index)}>
                      <Flex align="center" justify="space-between">
                        <Text
                          align="start"
                          color="#000000"
                          fontSize={{ base: "15", lg: "20" }}
                          fontWeight="bold"
                          py="2"
                        >
                          {faq.question}
                        </Text>
                      </Flex>
                      {answer && (
                        <Text
                          align="start"
                          color="#000000"
                          fontSize={{ base: "10", lg: "12" }}
                          // fontWeight="bold"
                          pb="2"
                        >
                          {faq.answer}
                        </Text>
                      )}
                    </Box>
                  </Stack>
                </Box>
              ))}
            </Stack>

            {/* 7th */}
            <Stack py="" align="center" width="100%" height="50%">
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
              <Flex></Flex>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    </Box>
  );
}
