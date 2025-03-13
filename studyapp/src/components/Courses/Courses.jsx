import "../Home/home.css";
import React, { useState } from "react";
import { Button, Container, HStack, Heading, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Course = ({ views, title, imageSrc, id, creator, description, lectureCount, addToPlaylist }) => {
  return (
    <VStack className="course" alignItems={["center", "flex-start"]}>
      <Image src={imageSrc || "/default-image.jpg"} boxSize="60" objectFit={"contain"} />
      <Heading textAlign={["center", "left"]} maxW={"200px"} children={title} size={"sm"} fontFamily={"sans-serif"} />
      <Text children={description || "No description available"} noOfLines={2} />

      <HStack>
        <Text fontWeight={"bold"} textTransform={"uppercase"} children={"Creator : "} />
        <Text fontFamily={"body"} textTransform={"uppercase"} children={creator || "Unknown"} />
      </HStack>

      <Heading textAlign={"center"} size={"xs"} children={`Lectures - ${lectureCount}`} />
      <Heading textAlign={"center"} size={"xs"} textTransform={"uppercase"} children={`Views - ${views}`} />

      <Stack direction={["column", "row"]} alignItems={"center"}>
        <Link to={`/course/${id}`}>
          <Button color={"cyan"}>Watch now</Button>
        </Link>
        <Button variant={"ghost"} colorScheme="cyan" onClick={() => addToPlaylist({ course: id, poster: imageSrc })}>
          Add to Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

function CoursesList({ addToPlaylist }) {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  // Static courses array
  const courses = [
    {
      _id: "1",
      title: "Node.js Basics",
      description: "Learn the fundamentals of Node.js, a powerful backend technology.",
      poster: {
        URL: "https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fp5rymbqwk2616sdxkcv9.png",
      },
      views: 1200,
      createdBy: "John Doe",
      numOfVideos: 12,
      category: "Node Js",
    },
    {
      _id: "2",
      title: "Advanced Node.js",
      description: "Master the advanced concepts of Node.js and build efficient applications.",
      poster: {
        URL: "https://wildlearner.com/learn-static/courses/course-6d7b06a3-d5f2-4954-8615-e1558d6212f6/images_1668072317065.jpg",
      },
      views: 1500,
      createdBy: "Jane Smith",
      numOfVideos: 18,
      category: "Node Js",
    },
    {
      _id: "3",
      title: "Artificial Intelligence",
      description: "Build web applications using Express, the popular Node.js framework.",
      poster: {
        URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYTz5b0VHp3jCQ0jUAPQSIur3ZSOZ8UTcUrg&s",
      },
      views: 1100,
      createdBy: "Alex Johnson",
      numOfVideos: 10,
      category: "Artificial Intelligence",
    },
    {
      _id: "4",
      title: "AI and Machine Learning",
      description: "Learn AI with Machine learning.",
      poster: {
        URL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxPzwFUxaxfLUs6x_l2TbX_L1NqOYCHi69XXe_sEcsgQcB_1lBoFpQ9CkIun5rTF59RQ&usqp=CAU",
      },
      views: 1300,
      createdBy: "Emily Davis",
      numOfVideos: 15,
      category: "Artificial Intelligence",
    },
    {
      _id: "5",
      title: "Python Programming",
      description: "Python Programming Course for Beginners to Advanced.",
      poster: {
        URL: "https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg",
      },
      views: 1000,
      createdBy: "CodeWithHarry",
      numOfVideos: 14,
      category: "Python Programming",
    },
    {
      _id: "6",
      title: "Python Programming with MongoDB",
      description: "Python Programming Course for Beginners to Advanced with MongoDB.",
      poster: {
        URL: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Python_MongoDB.PNG",
      },
      views: 1000,
      createdBy: "CodeWithHarry",
      numOfVideos: 14,
      category: "Python Programming",
    },
    {
      _id: "7",
      title: "Core Java Programming",
      description: "Core Java Programming Course for Beginners.",
      poster: {
        URL: "https://digitalpioneersacademy.in/wp-content/uploads/2024/08/core-java-online-training-1.jpg",
      },
      views: 1000,
      createdBy: "CodeWithHarry",
      numOfVideos: 14,
      category: "Java Programming",
    },
    {
      _id: "8",
      title: "Java Advanced",
      description: "Java Advance Course.",
      poster: {
        URL: "https://www.traininginbangalore.com/images/infographics/advanced-java-training-in-bangalore-tib.jpg",
      },
      views: 1000,
      createdBy: "CodeWithHarry",
      numOfVideos: 14,
      category: "Java Programming",
    },
  ];

  // Filtered courses based on keyword and category
  const filteredCourses = courses.filter((course) => {
    return (
      course.title.toLowerCase().includes(keyword.toLowerCase()) &&
      (category === "" || course.category === category)
    );
  });

  return (
    <Container minH={"95vh"} maxW="container.lg" paddingY={"8"}>
      <Heading paddingTop={"4"} children="All Courses" m={"8"} />
      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search a course..."
        type="text"
        focusBorderColor="cyan"
      />

      <HStack
        overflowX={"auto"}
        paddingY={"8"}
        css={{ "&::-webkit-scrollbar": { display: "none" } }}
      >
        <Button onClick={() => setCategory("Java Programming")} minW={"60"}>
          <Text children="Java Programming" />
        </Button>
        <Button onClick={() => setCategory("Node Js")} minW={"60"}>
          <Text children="Node Js" />
        </Button>
        <Button onClick={() => setCategory("Artificial Intelligence")} minW={"60"}>
          <Text children="Artificial Intelligence" />
        </Button>
        <Button onClick={() => setCategory("Python Programming")} minW={"60"}>
          <Text children="Python Programming" />
        </Button>
        <Button onClick={() => setCategory("")} minW={"60"}>
          <Text children="All" />
        </Button>
        {/* Add more category buttons here */}
      </HStack>

      <Stack
        direction={["column", "row"]}
        flexWrap={"wrap"}
        justifyContent={["flex-start", "space-evenly"]}
        alignItems={["center", "flex-start"]}
      >
        {filteredCourses.length > 0 ? (
          filteredCourses.map((item) => (
            <Course
              key={item._id}
              title={item.title}
              description={item.description}
              imageSrc={item.poster.URL}
              views={item.views}
              creator={item.createdBy}
              id={item._id}
              lectureCount={item.numOfVideos}
              addToPlaylist={addToPlaylist}
            />
          ))
        ) : (
          <Heading mt={"4"} opacity={0.5} children="Course Not Found" />
        )}
      </Stack>
    </Container>
  );
}

const Playlist = ({ addToPlaylist }) => {
  const [playlist, setPlaylist] = useState([]);

  const removeFromPlaylistHandler = (courseId) => {
    setPlaylist(playlist.filter((item) => item.course !== courseId));
  };

  const addToPlaylistHandler = (newCourse) => {
    setPlaylist([...playlist, newCourse]);
  };

  return (
    <Container minH={"95vh"} maxW={"container.lg"} py="8">
      <Heading textAlign={"center"} children="Your Playlist" m="8" textTransform={"uppercase"} />

      <Heading children="Playlist" size={"md"} my="8" />

      {playlist.length > 0 ? (
        <Stack direction={["column", "row"]} alignItems={"center"} flexWrap={"wrap"} p="4">
          {playlist.map((element) => (
            <VStack w="48" m="2" key={element.course}>
              <Image boxSize={"full"} objectFit="contain" src={element.poster} />
              <HStack justifyContent={"space-between"}>
                <Link to={`/course/${element.course}`}>
                  <Button size={"sm"} color={"aqua"}>
                    Watch Now
                  </Button>
                </Link>
                <Button onClick={() => removeFromPlaylistHandler(element.course)}>
                  <RiDeleteBin7Fill size={"16"} />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      ) : (
        <Text>No courses in the playlist</Text>
      )}

      <CoursesList addToPlaylist={addToPlaylistHandler} /> {/* Add Courses component here */}
    </Container>
  );
};

export default Playlist;