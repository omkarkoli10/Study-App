import Loader from "../Layout/Loader/Loader";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getCourseLectures } from "../../redux/actions/course";

const Coursepage = ({ user }) => {
    const dispatch = useDispatch();
    const params = useParams();
    const [lectureNumber, setLectureNumber] = useState(0);
    const { lectures, loading } = useSelector(state => state.course);

    useEffect(() => {
        dispatch(getCourseLectures(params.id));
    }, [dispatch, params.id]);

    if (user.role !== "admin" && user.subscription === undefined) {
        return <Navigate to={"/subscribe"} />;
    }

    return loading ? (
        <Loader />
    ) : (
        <div style={{ textAlign: "center" }}>
            {lectures && lectures.length > 0 ? (
                <>
                    <div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <video
                                width={"80%"} // Adjust width as needed
                                src={lectures[lectureNumber].video.url}
                                autoPlay={true}
                                controls={true}
                                controlsList='nodownload noremoteplay'
                                disablePictureInPicture={true}
                                disableRemotePlayback={true}
                                style={{ margin: "0 auto", display: "block" }} // Center the video
                            ></video>
                        </div>

                        <h2>{`${lectureNumber + 1}  ${lectures[lectureNumber].title}`}</h2>
                        <h3>Description</h3>
                        <p>{lectures[lectureNumber].description}</p>
                    </div>

                    <div>
                        {lectures.map((item, index) => (
                            <button
                                onClick={() => setLectureNumber(index)}
                                key={item._id}
                                style={{ margin: "5px" }} // Add some margin for spacing
                            >
                                <span>#{index + 1} {item.title}</span>
                            </button>
                        ))}
                    </div>
                    </>
                ) : null}
        </div>
    );
};

// Sample video data
const videos = [
    { id: 1, title: 'Artificial Intelligence', url: 'https://youtu.be/JMUxmLyrhSk?si=PnaJTPPJz_CxkVVX' },
    { id: 2, title: 'Core Java Programming', url: 'https://www.youtube.com/live/CFD9EFcNZTQ?si=hl3sgTTGc1tp3eOS' },
    { id: 3, title: 'Python Programming', url: 'https://youtu.be/UrsmFxEIp5k?si=67i84_jAnNIYm00P' },
    { id: 4, title: 'Node.js Crash Course', url: 'https://youtu.be/Oe421EPjeBE?si=UvMRyrXfpsPrdVJV' },
];

const VideoSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter videos based on the search term
    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ textAlign: "right"}}> {/* Add padding to the right */}
        <div style={{ paddingTop: "60px" }}>
        <h1 style={{ paddingRight: "80px",marginRight:"20px" }}>Video Search</h1>
        <input
            type="text"
            placeholder="Search for a video..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: "20px", maxWidth: "300px", width: "100%",paddingRight: "80px",marginRight:"20PX"}} // Set max width and full width
        />
        </div>
            <div>
                {filteredVideos.length > 0 ? (
                    filteredVideos.map(video => (
                        <div key={video.id} style={{ textAlign: "center"}}>
                            <h2>{video.title}</h2>
                            <ReactPlayer url={video.url}
                            controls={true}  
                            style={{ margin: "0 auto",textAlign: "center"}} />
                        </div>
                    ))
                ) : (
                    <p>No videos found.</p>
                )}
            </div>
        </div>
    );
};

// Main component to render both Coursepage and VideoSearch
const MainComponent = ({ user }) => {
    return (
        <div>
            <Coursepage user={user} />
            <VideoSearch />
        </div>
    );
};

export default MainComponent;