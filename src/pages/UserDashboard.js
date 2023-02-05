import "./UserDashboard.css";

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <div className="content">
        <img
          className="gradient-balls-bg"
          alt=""
          src="../gradient-balls-bg.svg"
        />
        <div className="first-page">
          <div className="side-bar-right">
            <div className="frame-parent">
              <div className="events-parent">
                <b className="events">Events</b>
                <div className="view-all">View all</div>
              </div>
              <div className="event-lists">
                <div className="course-card">
                  <img
                    className="course-card-child"
                    alt=""
                    src="../rectangle-6@2x.png"
                  />
                  <div className="event">Event</div>
                  <div className="event-page-btn-comp">
                    <div className="prop">Buy Ticket</div>
                  </div>
                </div>
                <div className="course-card">
                  <img
                    className="course-card-child"
                    alt=""
                    src="../rectangle-6@2x.png"
                  />
                  <div className="event">Event</div>
                  <div className="event-page-btn-comp">
                    <div className="prop">Buy Ticket</div>
                  </div>
                </div>
                <div className="course-card">
                  <img
                    className="course-card-child"
                    alt=""
                    src="../rectangle-62@2x.png"
                  />
                  <div className="event">Event</div>
                  <div className="event-page-btn-comp">
                    <div className="prop">Buy Ticket</div>
                  </div>
                </div>
                <div className="course-card">
                  <img
                    className="course-card-child"
                    alt=""
                    src="../rectangle-63@2x.png"
                  />
                  <div className="event">Event</div>
                  <div className="event-page-btn-comp">
                    <div className="prop">Buy Ticket</div>
                  </div>
                </div>
                <div className="course-card">
                  <img
                    className="course-card-child"
                    alt=""
                    src="../rectangle-63@2x.png"
                  />
                  <div className="event">Event</div>
                  <div className="event-page-btn-comp">
                    <div className="prop">Buy Ticket</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent">
              <div className="events-parent">
                <b className="events">Courses</b>
                <div className="view-all">View all</div>
              </div>
              <div className="event-lists">
                <div className="course-card">
                  <img
                    className="course-card-child"
                    alt=""
                    src="../rectangle-6@2x.png"
                  />
                  <div className="event5">Course</div>
                  <div className="event-page-btn-comp">
                    <div className="prop">Continue</div>
                  </div>
                </div>
                <div className="course-card">
                  <img
                    className="course-card-child"
                    alt=""
                    src="../rectangle-6@2x.png"
                  />
                  <div className="event5">Course</div>
                  <div className="event-page-btn-comp">
                    <div className="prop">Buy course</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent">
              <div className="events-parent">
                <b className="events">Blogs</b>
                <div className="view-all">View all</div>
              </div>
              <div className="event-lists">
                <div className="course-card">
                  <img
                    className="course-card-child"
                    alt=""
                    src="../rectangle-63@2x.png"
                  />
                  <div className="event5">Blog</div>
                  <div className="event-page-btn-comp">
                    <div className="prop">Read</div>
                  </div>
                </div>
                <div className="course-card">
                  <img
                    className="course-card-child"
                    alt=""
                    src="../rectangle-63@2x.png"
                  />
                  <div className="event5">Blog</div>
                  <div className="event-page-btn-comp">
                    <div className="prop">Read</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-bar">
        <img
          className="mdibell-notification-icon"
          alt=""
          src="../mdibellnotification.svg"
        />
        <div className="nav-bar-child" />
        <div className="logo">LOGO</div>
      </div>
      <div className="side-bar-left">
        <div className="user-name-parent">
          <div className="user-name">
            <img className="user-name-child" alt="" src="../ellipse-1.svg" />
            <img className="user-name-item" alt="" src="../ellipse-12@2x.png" />
            <b className="user-name1">User name</b>
            <div className="designation">Designation</div>
          </div>
          <div className="user">
            <div className="active-list-item">
              <div className="list-item">
                <img className="icon" alt="" src="../icon.svg" />
                <div className="prop">Home</div>
              </div>
            </div>
            <div className="list-item1">
              <img className="icon" alt="" src="../icon.svg" />
              <div className="prop">Courses</div>
            </div>
            <div className="list-item1">
              <img className="icon" alt="" src="../icon.svg" />
              <div className="prop">Events</div>
            </div>
            <div className="list-item1">
              <img className="icon" alt="" src="../icon.svg" />
              <div className="prop">Blogs</div>
            </div>
          </div>
          <div className="company">
            <div className="list-item4">
              <img className="icon" alt="" src="../icon4.svg" />
              <div className="prop">Settings</div>
            </div>
            <div className="list-item4">
              <img className="icon" alt="" src="../icon4.svg" />
              <div className="prop">Services</div>
            </div>
            <div className="list-item4">
              <img className="icon" alt="" src="../icon4.svg" />
              <div className="prop">{`Help & FAQs`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
