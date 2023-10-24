@media screen and (max-width:320px){
  .appHeader {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(146, 202, 255, 0.05);
  }
  .subHeader {
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .home {
    font-size: 25px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home img {
    width: 50px;
    height: 50px;
  }
  .navigation {
    display: none;
  }
  .humberger {
    display: flex;
  }
  .navigationBar{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color:  #2b3e71;
    font-size: 30px;
    display: none;
  }
  .navigationBar.active{
    display: flex;
  }
  .cancel{
    margin-right: 30px;
    width: 30px;
  }
  .cancel span{
    width: 30px;
    height: 3px;
    background-color: #000000;
  }

  /* landing Page */
  .appLanding {
    width: 100%;
    min-height: 100vh;
  }
  .cloud {
    padding-top: 50px;
    width: 100%;
  }
  .cloud img {
    width: 100%;
    height: 155px;
  }
  .landings {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
  }
  .landings .landing {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .landing .smallShip {
    position: absolute;
    left:0;
    top: -150px;
    width: 180px;
    height: 180px;
  }
  .landing .logoShip {
    position: absolute;
    left: 80px;
    top: -20px;
    width: 100px;
    height: 100px;
  }
  .landing .bigShip {
    position: absolute;
    top: -180px;
    left: 0;
    width: 300px;
    height: 300px;
  }
  .landing .subLanding {
    width: 100%;
    position: absolute;
    top: 100px;
    left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    font-size: 32px;
    letter-spacing: 2px;
    color: #ffffff;
  }
  .landing .subLanding2 {
    text-align: center;
    font-size: 24px;
  }
  .smallShip img,
  .bigShip img,
  .logoShip img {
    width: 100%;
    height: 100%;
  }
  .fish1 img {
    width: 100%;
  }
  .fish2 {
    position: absolute;
    width: 70%;
    left:0;
    top: 70%;
    z-index: -888;
  }
  .fish3 {
    position: absolute;
    left: 180px;
    top: 84%;
    z-index: -888;
    width: 40%;
  }
  .fish2 img{
    width: 50%;
  }
  .fish3 img{
    width: 100%;
  }
  .subJourney {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2px;
    color: #ffffff;
  }
  .subJourney div:nth-child(1) {
    font-size: 25px;
    text-align: center;
    letter-spacing: 5px;
    font-weight: 700;
    padding-bottom: 8px;
  }
  .subJourney div:nth-child(2),
  .subJourney div:nth-child(3) {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
  .listSubJourney {
    width: 100%;
    height: 100%;
  }
  .myswiper{
    width: 80%;
    height: 300px;
    color: #000000;

  }
  .swiper{
    width: 250px;
    height: 200px;
    color: #000000;
  }
  .journey {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
  .journey div:nth-child(2) {
    position: absolute;
    font-size: 12px;
    margin-bottom: 30px;
    padding: 8px 12px 8px 12px;
    border-radius: 10px;
    font-family: 'fredoka one';
    font-weight: 700;
    color: #000000;
    background-color: #8d8d8d81;
  }
  .journey img {
    width: 100%;
    height: 220px;
    margin-bottom: 160px;
  }
  .seeMoreJourney {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .subSeeMore {
    width: 70%;
    height: 15px;
    font-size: 16px;
    text-align: center;
    border-radius: 20px;
    background-color: #ffffff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .subSeeMore:hover .seeMore {
    background-color: rgba(241, 244, 254, 0.8);
  }
  .seeMore {
    width: 100%;
    font-size: 20px;
    color: #000000;
    text-decoration: none;
  }
  .subSeeMore:hover .subSeeMore {
    transform: scale(1.1);
  }
  /* TIMELINE */
  .appTimeline {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;
  }
  .appTimeline .tittleTimeline {
    width: 90%;
    text-align: center;
    font-size: 28px;
    font-family: "fredoka one";
    color: #ffffff;
  }
  .listTimelines {
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .listTime {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .timeline {
    width: 25px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;
  }
  .timeline.active {
    background-color: #cfcfcf5d;
  }
  .timeline div {
    font-size: 9px;
    text-align: center;
    color: #ffffff;
  }
  .line {
    width: 90%;
    background-color: rgb(255, 255, 255);
    height: 2px;
    position: absolute;
  }
  .circle {
    width: 10px;
    height: 10px;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
  }
  .listContent {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }
  .contentTimeline {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .explaineTimeline {
    width: 280px;
    height: 280px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #6679ac5e;
    border-radius: 30px;
    display: none;
  }
  .explaineTimeline.active {
    display: flex;
  }
  .contentExpTimeline {
    width: 180px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
    font-family: "Times New Roman";
  }
  .icon {
    width: 80px;
    height: 150px;
  }
  .content1 {
    font-size: 22px;
    font-family: "fredoka one";
  }
  .content2 {
    font-size: 12px;
    text-align: center;
  }
  /* ASKING */
  .appAsking {
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;
  }
  .listAsk {
    width: 85%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
  }
  .appAsking .tittleAsk {
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-family: "fredoka one";
    color: #ffffff;
  }
  .ask.active .answer {
    width: 100%;
    padding: 8px;
    height: 80px;
    margin-top: 10px;
    background-color: rgba(222, 229, 255, 0.8);
    border-radius: 10px;
  }
  /* FOOOTER */
  .appFooter {
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 253, 255, 0.12);  
  }
  .subFooter{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .subFooter .event {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
  }
  .director {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 50%;
  }
  .director img {
    width: 35px;
    height: 35px;
  }
  .director div:nth-child(2) {
    text-align: center;
    font-family: 'fredoka one';
    font-size: 14px;

  }
  .director div:nth-child(3) {
    border-left: 2px solid rgb(255, 255, 255);
    display: flex;
    align-items: center;
    height: 20px;
    font-size: 14px;
    font-family: 'fredoka one';
  }
  .sosmed {
    color: #ffffff;
    font-size: 25px;
    display: flex;
    align-items: center ;
    gap: 10px;
  }
  .sosmed a {
    text-decoration: none;
    color: #ffffff;
    font-size: 12px;
  }
  .credit {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    color: #ffffff;
    font-size: 10px;
  }
  
  .under{
    position: absolute;
    z-index: -888;
    width: 100%;
    top: 270%;
  }
  .under img{
    width: 100%;
  }
}
@media screen and (min-width:320px) and (max-width:360px){
  .appHeader {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(146, 202, 255, 0.05);
  }
  .subHeader {
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .home {
    font-size: 25px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home img {
    width: 50px;
    height: 50px;
  }
  .navigation {
    display: none;
  }
  .humberger {
    display: flex;
  }
  .navigationBar{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color:  #2b3e71;
    font-size: 30px;
    display: none;
  }
  .navigationBar.active{
    display: flex;
  }
  .cancel{
    margin-right: 30px;
    width: 30px;
  }
  .cancel span{
    width: 30px;
    height: 3px;
    background-color: #000000;
  }

  /* landing Page */
  .appLanding {
    width: 100%;
    min-height: 100vh;
  }
  .cloud {
    padding-top: 50px;
    width: 100%;
  }
  .cloud img {
    width: 99%;
    height: 155px;
  }
  .landings {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 10%;
  }
  .landings .landing {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .landing .smallShip {
    position: absolute;
    left: 0;
    top: -180px;
    width: 200px;
    height: 200px;
  }
  .landing .logoShip {
    position: absolute;
    left: 90px;
    top: -40px;
    width: 100px;
    height: 100px;
  }
  .landing .bigShip {
    position: absolute;
    top: -230px;
    left: 20px;
    width: 300px;
    height: 340px;
    
  }
  .landing .subLanding {
    width: 100%;
    position: absolute;
    top: 50px;
    left: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    font-size: 40px;
    letter-spacing: 2px;
    color: #ffffff;
  }
  .landing .subLanding2 {
    text-align: center;
    font-size: 20px;
  }
  .smallShip img,
  .bigShip img,
  .logoShip img {
    width: 100%;
    height: 100%;
  }
  .fish1 img {
    width: 100%;
  }
  .fish2{
    position: absolute;
    top: 68%;
    left: 10px;
    width: 80%;
    z-index: -888;
  }
  .fish2 img {
    width: 50%;
  }
  .fish3 {
    display: flex;
    position: absolute;
    z-index: -888;
    left: 180px;
    height: 80px;
  }
  .fish3 img {
    width: 100%;
  }
  .subJourney {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2px;
    color: #ffffff;
  }
  .subJourney div:nth-child(1) {
    font-size: 16px;
    text-align: center;
    font-weight: 700;
    padding-bottom: 8px;
  }
  .subJourney div:nth-child(2),
  .subJourney div:nth-child(3) {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
  .listJourney{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .listSubJourney {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .myswiper{
    width: 100%;
    height: 300px;
    color: #000000;

  }
  .swiper{
    width: 280px;
    height: 280px;
    color: #000000;
  }
  .journey {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 10px;

  }
  .journey div:nth-child(2) {
    position: absolute;
    font-size: 12px;
    margin-top: 80px;
    color: #000000;
  }
  .journey img {
    width: 200px;
    height: 300px;
    margin-bottom: 120px;
  }
  .seeMoreJourney {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .subSeeMore {
    width: 70%;
    height: 20px;
    font-size: 12px;
    text-align: center;
    border-radius: 20px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
  }
  .subSeeMore:hover .seeMore {
    background-color: rgba(241, 244, 254, 0.8);
  }
  .seeMore {
    width: 100%;
    color: #000000;
    text-decoration: none;
    cursor: pointer;
  }
  .subSeeMore:hover .subSeeMore {
    transform: scale(1.1);
  }
  /* TIMELINE */
  .appTimeline {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;
  }
  .appTimeline .tittleTimeline {
    width: 90%;
    text-align: center;
    font-size: 26px;
    font-family: "fredoka one";
    color: #ffffff;
  }
  .listTimelines {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 30px;
  }
  .listTime {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .timeline {
    width: 24px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;
  }
  .timeline.active {
    background-color: #cfcfcf5d;
  }
  .timeline div {
    font-size: 10px;
    text-align: center;
    color: #ffffff;
  }
  .line {
    width: 85%;
    background-color: rgb(255, 255, 255);
    height: 2px;
    position: absolute;
  }
  .circle {
    width: 10px;
    height: 10px;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
  }
  .listContent {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }
  .contentTimeline {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .explaineTimeline {
    width: 250px;
    height: 250px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #6679ac5e;
    border-radius: 30px;
    display: none;
  }
  .explaineTimeline.active {
    display: flex;
  }
  .contentExpTimeline {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
    font-family: "Times New Roman";
  }
  .icon {
    width: 100px;
    height: 150px;
  }
  .content1 {
    font-size: 20px;
    font-family: "fredoka one";
  }
  .content2 {
    width: 160px;
    font-size: 14px;
    text-align: center;
  }
  /* ASKING */
  .appAsking {
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 100px;
  }
  .appAsking .tittleAsk {
    width: 90%;
    text-align: center;
    font-size: 24px;
    font-family: "fredoka one";
    color: #ffffff;
  }
  .listAsk {
    width: 85%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-gap: 1rem;
  }
  .ask.active .answer {
    width: 100%;
    padding: 8px;
    height: 80px;
    margin-top: 10px;
    background-color: rgba(222, 229, 255, 0.8);
    border-radius: 10px;
  }
  /* FOOOTER */
  .appFooter {
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 253, 255, 0.12);  
  }
  .subFooter .event {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
  }
  .director {
    width: 48%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
  }
  .director img {
    width: 30px;
    height: 30px;
  }
  .director div:nth-child(2) {
    text-align: center;
    font-size: 12px;
  }
  .director div:nth-child(3) {
    border-left: 2px solid rgb(255, 255, 255);
    height: 20px;
    font-size: 12px;
    padding-left: 8px;
    display: flex;
    align-items: center;
  }
  .sosmed {
    color: #ffffff;
    font-size: 20px;
    display: flex;
    gap: 10px;
  }
  .sosmed a {
    text-decoration: none;
    color: #ffffff;
    font-size: 12px;
  }
  .credit {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    color: #ffffff;
    font-size: 10px;
  }
  
  .under{
    position: absolute;
    z-index: -888;
    width: 100%;
    top: 270%;
  }
  .under img{
    width: 100%;
  }
}
@media screen and (min-width:360px) and (max-width:400px){
  .appHeader {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(146, 202, 255, 0.05);
  }
  .subHeader {
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .home {
    font-size: 25px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home img {
    width: 50px;
    height: 50px;
  }
  .navigation {
    display: none;
  }
  .humberger {
    display: flex;
  }
  .navigationBar{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 80vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color:  #2b3e71;
    font-size: 30px;
    display: none;
  }
  .navigationBar.active{
    display: flex;
  }
  .cancel{
    margin-right: 30px;
    width: 30px;
  }
  .cancel span{
    width: 30px;
    height: 3px;
    background-color: #000000;
  }

  /* landing Page */
  .appLanding {
    width: 100%;
    min-height: 100vh;
  }
  .cloud {
    padding-top: 50px;
    width: 100%;
  }
  .cloud img {
    width: 100%;
    height: 155px;
  }
  .landings {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 10%;
  }
  .landings .landing {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .landing .smallShip {
    position: absolute;
    left: 0;
    top: -200px;
    width: 250px;
    height: 200px;
  }
  .landing .logoShip {
    position: absolute;
    left: 130px;
    top: -60px;
    width: 100px;
    height: 100px;
  }
  .landing .bigShip {
    position: absolute;
    top: -220px;
    left: -10px;
    width: 380px;
    height: 300px;
  }
  .landing .subLanding {
    width: 100%;
    position: absolute;
    top: 50px;
    left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    font-size: 42px;
    font-weight: 800;
    letter-spacing: 2px;
    color: #ffffff;
  }
  .landing .subLanding2 {
    text-align: center;
    font-weight: 600;
    font-size: 22px;
  }
  .smallShip img,
  .bigShip img,
  .logoShip img {
    width: 100%;
    height: 100%;
  }
  .fish1 img {
    width: 100%;
  }
  .fish2 {
    position: absolute;
    width: 50%;
    z-index: 888;
  }
  .fish2 img {
    width: 50%;
  }
  .fish3 {
    display: flex;
    position: absolute;
    z-index: -888;
    height: 80px;
    left: 220px;
    margin-top: 80px;
  }
  .fish3 img {
    width: 80%;
  }
  .subJourney {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2px;
    color: #ffffff;
  }
  .subJourney div:nth-child(1) {
    font-size: 30px;
    text-align: center;
    font-weight: 800;
    font-family: 'fredoka one';
    padding-bottom: 8px;
  }
  .subJourney div:nth-child(2),
  .subJourney div:nth-child(3) {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }
  .listSubJourney {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .myswiper{
    width: 100%;
    height: 300px;
    color: #000000;

  }
  .swiper{
    width: 300px;
    height: 280px;
    border-radius: 30px;
    color: #000000;
  }
  .journey {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 10px;

  }
  .journey div:nth-child(2) {
    position: absolute;
    font-size: 18px;
    margin-top: 80px;
    padding: 8px 12px 8px 12px;
    border-radius: 10px;
    font-family: 'fredoka one';
    font-weight: 700;
    color: #000000;
    background-color: #8d8d8d81;
  }
  .journey img {
    width: 200px;
    height: 300px;
    margin-bottom: 120px;
  }
  .seeMoreJourney {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .subSeeMore {
    width: 70%;
    height: 20px;
  }
  .subSeeMore:hover .seeMore {
    background-color: rgba(241, 244, 254, 0.8);
  }
  .seeMore {
    width: 100%;
    height: 10px;
    font-size: 16px;
    text-align: center;
    border-radius: 20px;
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;
  }
  .subSeeMore:hover .subSeeMore {
    transform: scale(1.1);
  }
  /* TIMELINE */
  .appTimeline {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 100px;
  }
  .appTimeline .tittleTimeline {
    width: 90%;
    text-align: center;
    font-size: 30px;
    font-family: "fredoka one";
    color: #ffffff;
  }
  .listTimelines {
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 30px;
  }
  .listTime {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .timeline {
    width: 35px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;
  }
  .timeline.active {
    background-color: #cfcfcf5d;
  }
  .timeline div {
    font-size: 12px;
    text-align: center;
    color: #ffffff;
  }
  .line {
    width: 85%;
    background-color: rgb(255, 255, 255);
    height: 2px;
    position: absolute;
  }
  .circle {
    width: 10px;
    height: 10px;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
  }
  .listContent {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }
  .contentTimeline {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .explaineTimeline {
    width: 300px;
    height: 280px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #6679ac5e;
    border-radius: 30px;
    display: none;
  }
  .explaineTimeline.active {
    display: flex;
  }
  .contentExpTimeline {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
    font-family: "Times New Roman";
  }
  .icon {
    width: 100px;
    height: 150px;
  }
  .content1 {
    font-size: 25px;
    font-family: "fredoka one";
  }
  .content2 {
    width: 200px;
    font-size: 14px;
    text-align: center;
  }
  /* ASKING */
  .appAsking {
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 100px;
  }
  .appAsking .tittleAsk {
    width: 90%;
    text-align: center;
    font-size: 28px;
    font-family: "fredoka one";
    color: #ffffff;
  }
  .listAsk {
    width: 85%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
  }
  .ask.active .answer {
    width: 100%;
    padding: 8px;
    height: 80px;
    margin-top: 10px;
    background-color: rgba(222, 229, 255, 0.8);
    border-radius: 10px;
  }
  /* FOOOTER */
  .appFooter {
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 253, 255, 0.12);  
  }
  .subFooter .event {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
  }
  .director {
    width: 52%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
  }
  .director img {
    width: 30px;
    height: 30px;
  }
  .director div:nth-child(2) {
    text-align: center;
    font-size: 16px;
  }
  .director div:nth-child(3) {
    border-left: 2px solid rgb(255, 255, 255);
    height: 20px;
    font-size: 16px;
    padding-left: 8px;
    display: flex;
    align-items: center;
  }
  .sosmed {
    color: #ffffff;
    font-size: 20px;
    display: flex;
    gap: 10px;
  }
  .sosmed a {
    text-decoration: none;
    color: #ffffff;
    font-size: 16px;
  }
  .credit {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    color: #ffffff;
    font-size: 12px;
  }
  
  .under{
    position: absolute;
    z-index: -888;
    width: 100%;
    top: 285%;
  }
  .under img{
    width: 100%;
  }
}
@media screen and (min-width:400px) and (max-width:420px){
  .appHeader {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(146, 202, 255, 0.05);
  }
  .subHeader {
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .home {
    font-size: 25px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home img {
    width: 50px;
    height: 50px;
  }
  .navigation {
    display: none;
  }
  .humberger {
    display: flex;
  }
  .navigationBar{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color:  #2b3e71;
    font-size: 30px;
    display: none;
  }
  .navigationBar.active{
    display: flex;
  }
  .cancel{
    margin-right: 30px;
    width: 30px;
  }
  .cancel span{
    width: 30px;
    height: 3px;
    background-color: #000000;
  }

  /* landing Page */
  .appLanding {
    width: 100%;
    min-height: 100vh;
  }
  .cloud {
    padding-top: 50px;
    width: 100%;
  }
  .cloud img {
    width:100%;
    height: 155px;
  }
  .landings {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 10%;
  }
  .landings .landing {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .landing .smallShip {
    position: absolute;
    left: 5px;
    top: -220px;
    width: 320px;
    height: 250px;
  }
  .landing .logoShip {
    position: absolute;
    left: 165px;
    top: -50px;
    width: 120px;
    height: 120px;
  }
  .landing .bigShip {
    position: absolute;
    top: -225px;
    left: 20px;
    width: 380px;
    height: 300px;
  }
  .landing .subLanding {
    width: 100%;
    position: absolute;
    top:60px;
    left: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    font-size: 45px;
    font-family: 'fredoka one';
    font-weight: 800;
    letter-spacing: 2px;
    color: #ffffff;
  }
  .landing .subLanding2 {
    text-align: center;
    font-weight: 600;
    font-size: 28px;
  }
  .smallShip img,
  .bigShip img,
  .logoShip img {
    width: 100%;
    height: 100%;
  }
  .fish1 img {
    width: 100%;
  }
  .fish2 {
    position: absolute;
    width: 60%;
    z-index: 888;
    top: 350px;
    left: 20px;
  }
  .fish2 img {
    width: 50%;
  }
  .fish3 {
    display: flex;
    position: absolute;
    z-index: -888;
    left: 250px;
    margin-top: 100px;
    
  }
  .fish3 img {
    width: 100%;
  }
  .appJourneyIntro{
    margin-top: 50px;
  }
  .subJourney {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2px;
    color: #ffffff;
  }
  .subJourney div:nth-child(1) {
    font-size: 28px;
    font-family: 'fredoka one';
    text-align: center;
    font-weight: 700;
    padding-bottom: 8px;
  }
  .subJourney div:nth-child(2),
  .subJourney div:nth-child(3) {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }
  .listSubJourney {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .myswiper{
    width: 100%;
    height: 300px;
    color: #000000;
  }
  .swiper{
    width: 380px;
    height: 280px;
    border-radius: 30px;
    color: #000000;
  }
  .journey {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 10px;

  }
  .journey div:nth-child(2) {
    position: absolute;
    font-size: 18px;
    margin-top: 80px;
    padding: 8px 12px 8px 12px;
    border-radius: 10px;
    font-family: 'fredoka one';
    font-weight: 700;
    color: #000000;
    background-color: #8d8d8d81;
  }
  .journey img {
    width: 100%;
    height: 300px;
    margin-bottom: 120px;
  }
  .seeMoreJourney {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .subSeeMore {
    width: 80%;
    height: 20px;
  }
  .subSeeMore:hover .seeMore {
    background-color: rgba(241, 244, 254, 0.8);
  }
  .seeMore {
    width: 100%;
    height: 10px;
    font-size: 16px;
    text-align: center;
    border-radius: 20px;
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;
  }
  .subSeeMore:hover .subSeeMore {
    transform: scale(1.1);
  }
  /* TIMELINE */
  .appTimeline {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 100px;
  }
  .appTimeline .tittleTimeline {
    width: 90%;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    font-family: "fredoka one";
    color: #ffffff;
  }
  .listTimelines {
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 30px;
  }
  .listTime {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .timeline {
    width: 40px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;
  }
  .timeline.active {
    background-color: #cfcfcf5d;
  }
  .timeline div {
    font-size: 13px;
    text-align: center;
    font-family: 'fredoka one';
    color: #ffffff;
  }
  .line {
    width: 85%;
    background-color: rgb(255, 255, 255);
    height: 2px;
    position: absolute;
  }
  .circle {
    width: 10px;
    height: 10px;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
  }
  .listContent {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }
  .contentTimeline {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .explaineTimeline {
    width: 340px;
    height: 280px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #6679ac5e;
    border-radius: 30px;
    display: none;
  }
  .explaineTimeline.active {
    display: flex;
  }
  .contentExpTimeline {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
    font-family: "Times New Roman";
  }
  .icon {
    width: 120px;
    height: 150px;
  }
  .content1 {
    font-size: 30px;
    font-family: "fredoka one";
  }
  .content2 {
    width: 230px;
    font-size: 16px;
    text-align: center;
    font-family: "fredoka one";
  }
  /* ASKING */
  .appAsking {
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;
  }
  .appAsking .tittleAsk {
    width: 90%;
    text-align: center;
    font-size: 25px;
    font-family: "fredoka one";
    color: #ffffff;
  }
  .listAsk {
    width: 85%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
  }
  .ask.active .answer {
    width: 100%;
    padding: 8px;
    height: 80px;
    margin-top: 10px;
    background-color: rgba(222, 229, 255, 0.8);
    border-radius: 10px;
  }
  /* FOOOTER */
  .appFooter {
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 253, 255, 0.12);  
  }
  .subFooter .event {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
  }
  .director {
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
  }
  .director img {
    width: 30px;
    height: 30px;
  }
  .director div:nth-child(2) {
    text-align: center;
    font-size: 16px;
  }
  .director div:nth-child(3) {
    border-left: 2px solid rgb(255, 255, 255);
    height: 20px;
    font-size: 16px;
    padding-left: 8px;
    display: flex;
    align-items: center;
  }
  .sosmed {
    color: #ffffff;
    font-size: 20px;
    display: flex;
    gap: 10px;
  }
  .sosmed a {
    text-decoration: none;
    color: #ffffff;
    font-size: 16px;
  }
  .credit {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    color: #ffffff;
    font-size: 13px;
  }
  
  .under{
    position: absolute;
    z-index: -888;
    width: 100%;
    top: 285%;
  }
  .under img{
    width: 100%;
  }
}
@media screen and (min-width:420px) and (max-width:480px){
  .appHeader {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(146, 202, 255, 0.05);
  }
  .subHeader {
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .home {
    font-size: 25px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home img {
    width: 50px;
    height: 50px;
  }
  .navigation {
    display: none;
  }
  .humberger {
    display: flex;
  }
  .navigationBar{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color:  #2b3e71;
    font-size: 30px;
    display: none;
  }
  .navigationBar.active{
    display: flex;
  }
  .cancel{
    margin-right: 30px;
    width: 30px;
  }
  .cancel span{
    width: 30px;
    height: 3px;
    background-color: #000000;
  }

  /* landing Page */
  .appLanding {
    width: 100%;
    min-height: 100vh;
  }
  .cloud {
    padding-top: 50px;
    width: 100%;
  }
  .cloud img {
    width: 100%;
    height: 155px;
  }
  .landings {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 10%;
  }
  .landings .landing {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .landing .smallShip {
    position: absolute;
    left: 0;
    top: -225px;
    width: 340px;
    height: 250px;
  }
  .landing .logoShip {
    position: absolute;
    left: 165px;
    top: -60px;
    width: 130px;
    height: 130px;
  }
  .landing .bigShip {
    position: absolute;
    top: -230px;
    left: 20px;
    width: 400px;
    height: 300px;
  }
  .landing .subLanding {
    width: 100%;
    position: absolute;
    top: 70px;
    left: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    font-size: 42px;
    font-family: 'fredoka one';
    font-weight: 800;
    letter-spacing: 2px;
    color: #ffffff;
  }
  .landing .subLanding2 {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
  }
  .smallShip img,
  .bigShip img,
  .logoShip img {
    width: 100%;
    height: 100%;
  }
  .fish1 img {
    width: 100%;
  }
  .fish2 {
    position: absolute;
    width: 50%;
    z-index: 888;
    top: 320px;
    left: 30px;
  }
  .fish2 img {
    width: 80%;
  }
  .fish3 {
    display: flex;
    position: absolute;
    z-index: -888;
    top: 420px;
    left: 250px;
  }
  .fish3 img {
    width: 100%;
    height: 80%;
  }
  .appJourneyIntro{
    margin-top: 50px;
  }
  .subJourney {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2px;
    color: #ffffff;
  }
  .subJourney div:nth-child(1) {
    font-size: 28px;
    letter-spacing: 0;
    text-align: center;
    font-family: 'fredoka one';
    font-weight: 700;
    padding-bottom: 8px;
  }
  .subJourney div:nth-child(2),
  .subJourney div:nth-child(3) {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }
  .listSubJourney {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .myswiper{
    width: 100%;
    height: 300px;
    color: #000000;
  }
  .swiper{
    width: 400px;
    height: 280px;
    border-radius: 30px;
    color: #000000;
  }
  .journey {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 10px;

  }
  .journey div:nth-child(2) {
    position: absolute;
    font-size: 18px;
    margin-top: 80px;
    padding: 8px 12px 8px 12px;
    border-radius: 10px;
    font-family: 'fredoka one';
    font-weight: 700;
    color: #000000;
    background-color: #8d8d8d81;
  }
  .journey img {
    width: 100%;
    height: 300px;
    margin-bottom: 120px;
  }
  .seeMoreJourney {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .subSeeMore {
    width: 80%;
    height: 20px;
    font-size: 16px;
    text-align: center;
    border-radius: 20px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
  }
  .subSeeMore:hover .seeMore {
    background-color: rgba(241, 244, 254, 0.8);
  }
  .seeMore {
    width: 100%;
    color: #000000;
    text-decoration: none;
    cursor: pointer;
  }
  .subSeeMore:hover .subSeeMore {
    transform: scale(1.1);
  }
  /* TIMELINE */
  .appTimeline {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 100px;
  }
  .appTimeline .tittleTimeline {
    width: 90%;
    text-align: center;
    font-size: 34px;
    letter-spacing: 0;
    font-family: "fredoka one";
    color: #ffffff;
  }
  .listTimelines {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 30px;
  }
  .listTime {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .timeline {
    width: 44px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;
  }
  .timeline.active {
    background-color: #cfcfcf5d;
  }
  .timeline div {
    font-size: 12px;
    text-align: center;
    font-family: 'fredoka one';
    color: #ffffff;
  }
  .line {
    width: 85%;
    background-color: rgb(255, 255, 255);
    height: 2px;
    position: absolute;
  }
  .circle {
    width: 10px;
    height: 10px;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
  }
  .listContent {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }
  .contentTimeline {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .explaineTimeline {
    width: 360px;
    height: 280px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #6679ac5e;
    border-radius: 30px;
    display: none;
  }
  .explaineTimeline.active {
    display: flex;
  }
  .contentExpTimeline {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
    font-family: "Times New Roman";
  }
  .icon {
    width: 120px;
    height: 150px;
  }
  .content1 {
    font-size: 30px;
    font-family: "fredoka one";
    font-weight: 700;
  }
  .content2 {
    width: 260px;
    font-size: 16px;
    text-align: center;
  }
  /* ASKING */
  .appAsking {
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 100px;
  }
  .appAsking .tittleAsk {
    width: 90%;
    text-align: center;
    font-size: 32px;
    font-family: "fredoka one";
    color: #ffffff;
  }
  .listAsk {
    width: 85%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1rem;
  }
  .ask.active .answer {
    width: 100%;
    padding: 8px;
    height: 80px;
    margin-top: 10px;
    background-color: rgba(222, 229, 255, 0.8);
    border-radius: 10px;
  }
  /* FOOOTER */
  .appFooter {
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 253, 255, 0.12);  
  }
  .subFooter .event {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
  }
  .director {
    width: 44%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
  }
  .director img {
    width: 30px;
    height: 30px;
  }
  .director div:nth-child(2) {
    text-align: center;
    font-size: 16px;
  }
  .director div:nth-child(3) {
    border-left: 2px solid rgb(255, 255, 255);
    height: 20px;
    font-size: 16px;
    padding-left: 8px;
    display: flex;
    align-items: center;
  }
  .sosmed {
    color: #ffffff;
    font-size: 20px;
    display: flex;
    gap: 10px;
  }
  .sosmed a {
    text-decoration: none;
    color: #ffffff;
    font-size: 16px;
  }
  .credit {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    color: #ffffff;
    font-size: 13px;
  }
  
  .under{
    position: absolute;
    z-index: -888;
    width: 100%;
    top: 292%;
  }
  .under img{
    width: 100%;
  }
}
@media screen and (min-width:480px) and (max-width:585px){
  .appHeader {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(146, 202, 255, 0.05);
  }
  .subHeader {
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .home {
    font-size: 25px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home img {
    width: 50px;
    height: 50px;
  }
  .navigation {
    display: none;
  }
  .humberger {
    display: flex;
  }
  .navigationBar{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color:  #2b3e71;
    font-size: 30px;
    display: none;
  }
  .navigationBar.active{
    display: flex;
  }
  .cancel{
    margin-right: 30px;
    width: 30px;
  }
  .cancel span{
    width: 30px;
    height: 3px;
    background-color: #000000;
  }

  /* landing Page */
  .appLanding {
    width: 100%;
    min-height: 100vh;
  }
  .cloud {
    padding-top: 50px;
    width: 100%;
  }
  .cloud img {
    width: 100%;
    height: 155px;
  }
  .landings {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 10%;
  }
  .landings .landing {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .landing .smallShip {
    position: absolute;
    left: 30px;
    top: -230px;
    width: 320px;
    height: 250px;
  }
  .landing .logoShip {
    position: absolute;
    left: 190px;
    top: -70px;
    width: 130px;
    height: 130px;
  }
  .landing .bigShip {
    position: absolute;
    top: -260px;
    left: 30px;
    width: 450px;
    height: 380px;
  }
  .landing .subLanding {
    width: 100%;
    position: absolute;
    top: 60px;
    left: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    font-size: 40px;
    font-family: 'fredoka one';
    font-weight: 800;
    color: #ffffff;
  }
  .landing .subLanding2 {
    font-weight: 600;
    text-align: center;
    font-size: 30px;
  }
  .smallShip img,
  .bigShip img,
  .logoShip img {
    width: 100%;
    height: 100%;
  }
  .fish1 img {
    width: 100%;
  }
  .fish2 {
    position: absolute;
    width: 60%;
    z-index: 888;
    top: 340px;
    left: 20px;
  }
  .fish2 img {
    width: 50%;
  }
  .fish3 {
    display: flex;
    position: absolute;
    z-index: -888;
    top: 410px;
    right: 0;
  }
  .fish3 img {
    width: 100%;
    height: 80%;
  }
  .appJourneyIntro{
    margin-top: 50px;
  }
  .subJourney {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2px;
    color: #ffffff;
  }
  .subJourney div:nth-child(1) {
    letter-spacing: 0;
    font-size: 32px;
    text-align: center;
    font-weight: 700;
    padding-bottom: 8px;
  }
  .subJourney div:nth-child(2),
  .subJourney div:nth-child(3) {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
  }
  .listSubJourney {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .myswiper{
    width: 100%;
    height: 300px;
    color: #000000;
  }
  .swiper{
    width: 420px;
    height: 280px;
    border-radius: 30px;
    color: #000000;
  }
  .journey {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 10px;

  }
  .journey div:nth-child(2) {
    position: absolute;
    font-size: 18px;
    margin-top: 80px;
    padding: 8px 12px 8px 12px;
    border-radius: 10px;
    font-family: 'fredoka one';
    font-weight: 700;
    color: #000000;
    background-color: #8d8d8d81;
  }
  .journey img {
    width: 200px;
    height: 300px;
    margin-bottom: 120px;
  }
  .seeMoreJourney {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .subSeeMore {
    width: 80%;
    height: 20px;
  }
  .subSeeMore:hover .seeMore {
    background-color: rgba(241, 244, 254, 0.8);
  }
  .seeMore {
    width: 100%;
    height: 10px;
    font-size: 16px;
    text-align: center;
    border-radius: 20px;
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;
  }
  .subSeeMore:hover .subSeeMore {
    transform: scale(1.1);
  }
  /* TIMELINE */
  .appTimeline {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 100px;
  }
  .appTimeline .tittleTimeline {
    width: 90%;
    text-align: center;
    font-size: 38px;
    font-family: "fredoka one";
    color: #ffffff;
  }
  .listTimelines {
    width: 82%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 30px;
  }
  .listTime {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .timeline {
    width: 58px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;
  }
  .timeline.active {
    background-color: #cfcfcf5d;
  }
  .timeline div {
    font-size: 14px;
    font-family: 'fredoka one';
    text-align: center;
    color: #ffffff;
  }
  .line {
    width: 85%;
    background-color: rgb(255, 255, 255);
    height: 2px;
    position: absolute;
  }
  .circle {
    width: 10px;
    height: 10px;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
  }
  .listContent {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }
  .contentTimeline {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .explaineTimeline {
    width: 430px;
    height: 300px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #6679ac5e;
    border-radius: 30px;
    display: none;
  }
  .explaineTimeline.active {
    display: flex;
  }
  .contentExpTimeline {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
    font-family: "Times New Roman";
  }
  .icon {
    width: 140px;
    height: 150px;
  }
  .content1 {
    font-size: 32px;
    font-family: "fredoka one";
    font-weight: 700;
  }
  .content2 {
    width: 300px;
    font-size: 18px;
    text-align: center;
  }
  /* ASKING */
  .appAsking {
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 100px;
  }
  .listAsk {
    width: 85%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
  .appAsking .tittleAsk {
    width: 90%;
    text-align: center;
    font-size: 30px;
    font-family: "fredoka one";
    color: #ffffff;
    margin-left: 20px;
  }
  .ask.active .answer {
    width: 100%;
    padding: 8px;
    height: 80px;
    margin-top: 10px;
    background-color: rgba(222, 229, 255, 0.8);
    border-radius: 10px;
  }
  /* FOOOTER */
  .appFooter {
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 253, 255, 0.12);  
  }
  .subFooter .event {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
  }
  .director {
    width: 42%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
  }
  .director img {
    width: 30px;
    height: 30px;
  }
  .director div:nth-child(2) {
    text-align: center;
    font-size: 18px;
  }
  .director div:nth-child(3) {
    border-left: 2px solid rgb(255, 255, 255);
    height: 20px;
    font-size: 18px;
    padding-left: 8px;
    display: flex;
    align-items: center;
  }
  .sosmed {
    color: #ffffff;
    font-size: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .sosmed a {
    text-decoration: none;
    color: #ffffff;
    font-size: 18px;
  }
  .credit {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    color: #ffffff;
    font-size: 14px;
  }
  
  .under{
    position: absolute;
    z-index: -888;
    width: 100%;
    top: 285%;
  }
  .under img{
    width: 100%;
  }
}
@media screen and (min-width:586px) and (max-width:640px){
  .appHeader {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(146, 202, 255, 0.05);
  }
  .subHeader {
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .home {
    font-size: 25px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home img {
    width: 50px;
    height: 50px;
  }
  .navigation {
    display: none;
  }
  .humberger {
    display: flex;
  }
  .navigationBar{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color:  #2b3e71;
    font-size: 30px;
    display: none;
  }
  .navigationBar.active{
    display: flex;
  }
  .cancel{
    margin-right: 30px;
    width: 30px;
  }
  .cancel span{
    width: 30px;
    height: 3px;
    background-color: #000000;
  }

  /* landing Page */
  .appLanding {
    width: 100%;
    min-height: 100vh;
  }
  .cloud {
    padding-top: 50px;
    width: 100%;
  }
  .cloud img {
    width: 100%;
    height: 155px;
  }
  .landings {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 10%;
  }
  .landings .landing {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .landing .smallShip {
    position: absolute;
    left: 30px;
    top: -240px;
    width: 350px;
    height: 300px;
  }
  .landing .logoShip {
    position: absolute;
    left:230px;
    top: -60px;
    width: 140px;
    height: 140px;
  }
  .landing .bigShip {
    position: absolute;
    top: -265px;
    left:60px;
    width: 500px;
    height: 400px;
  }
  .landing .subLanding {
    width: 100%;
    position: absolute;
    top: 80px;
    left: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    font-size: 42px;
    font-family: 'fredoka one';
    font-weight: 800;
    color: #ffffff;
  }
  .landing .subLanding2 {
    font-weight: 600;
    text-align: center;
    font-size: 30px;
  }
  .smallShip img,
  .bigShip img,
  .logoShip img {
    width: 100%;
    height: 100%;
  }
  .fish1 img {
    width: 100%;
  }
  .fish2 {
    position: absolute;
    width: 50%;
    z-index: 888;
    top: 350px;
    left: 60px;
  }
  .fish2 img {
    width: 50%;
  }
  .fish3 {
    display: flex;
    position: absolute;
    
    z-index: -888;
    top: 420px;
    left: 380px;
  }
  .fish3 img {
    width: 100%;
    height: 80%;
  }
  .appJourneyIntro{
    margin-top: 50px;
  }
  .subJourney {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2px;
    color: #ffffff;
  }
  .subJourney div:nth-child(1) {
    font-size: 34px;
    letter-spacing: 0;
    text-align: center;
    font-weight: 800;
    font-family: 'fredoka one';
    padding-bottom: 8px;
  }
  .subJourney div:nth-child(2),
  .subJourney div:nth-child(3) {
    font-size: 20px;
    font-weight: 500;
    font-weight: 600;
    font-family: 'fredoka one';
    text-align: center;
  }
  .listSubJourney {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .myswiper{
    width: 100%;
    height: 300px;
    color: #000000;
  }
  .swiper{
    width: 550px;
    height: 280px;
    border-radius: 30px;
    color: #000000;
  }
  .journey {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
  .journey div:nth-child(2) {
    position: absolute;
    font-size: 18px;
    margin-top: 100px;
    padding: 8px 12px 8px 12px;
    border-radius: 10px;
    font-family: 'fredoka one';
    font-weight: 700;
    color: #000000;
    background-color: #8d8d8d81;
  }
  .journey img {
    width: 100%;
    height: 300px;
    margin-bottom: 120px;
  }
  .seeMoreJourney {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .subSeeMore {
    width: 80%;
    height: 20px;
    margin-left: 20px;
  }
  .subSeeMore:hover .seeMore {
    background-color: rgba(241, 244, 254, 0.8);
  }
  .seeMore {
    width: 100%;
    height: 10px;
    font-size: 16px;
    text-align: center;
    border-radius: 20px;
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;
  }
  .subSeeMore:hover .subSeeMore {
    transform: scale(1.1);
  }
  /* TIMELINE */
  .appTimeline {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 100px;
  }
  .appTimeline .tittleTimeline {
    width: 90%;
    text-align: center;
    font-size: 40px;
    font-family: "fredoka one";
    color: #ffffff;
  }
  .listTimelines {
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 30px;
  }
  .listTime {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .timeline {
    width: 70px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;
  }
  .timeline.active {
    background-color: #cfcfcf5d;
  }
  .timeline div {
    font-size: 14px;
    text-align: center;
    color: #ffffff;
  }
  .line {
    width: 85%;
    background-color: rgb(255, 255, 255);
    height: 2px;
    position: absolute;
  }
  .circle {
    width: 10px;
    height: 10px;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
  }
  .listContent {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }
  .contentTimeline {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .explaineTimeline {
    width: 520px;
    height: 320px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #6679ac5e;
    border-radius: 30px;
    display: none;
  }
  .explaineTimeline.active {
    display: flex;
  }
  .contentExpTimeline {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
    font-family: "Times New Roman";
  }
  .icon {
    width: 180px;
    height: 180px;
  }
  .content1 {
    font-size: 32px;
    font-family: "fredoka one";
  }
  .content2 {
    width: 300px;
    font-size: 20px;
    text-align: center;
  }
  /* ASKING */
  .appAsking {
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 100px;
  }
  .listAsk {
    width: 85%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;

  }
  .appAsking .tittleAsk {
    width: 90%;
    text-align: center;
    font-size: 32px;
    font-family: "fredoka one";
    color: #ffffff;
    font-weight: 700;
    
  }
  .ask.active .answer {
    width: 100%;
    padding: 8px;
    height: 80px;
    margin-top: 10px;
    background-color: rgba(222, 229, 255, 0.8);
    border-radius: 10px;
  }
  /* FOOOTER */
  .appFooter {
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 253, 255, 0.12);  
  }
  .subFooter .event {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
  }
  .director {
    width: 38%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
  }
  .director img {
    width: 30px;
    height: 30px;
  }
  .director div:nth-child(2) {
    text-align: center;
    font-size: 20px;
    font-family: 'fredoka one';
    font-weight: 600;
  
  }
  .director div:nth-child(3) {
    border-left: 2px solid rgb(255, 255, 255);
    height: 20px;
    font-size: 18px;
    padding-left: 8px;
    display: flex;
    align-items: center;
    font-family: 'fredoka one';
    font-weight: 600;
  }
  .sosmed {
    color: #ffffff;
    font-size: 30px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .sosmed a {
    text-decoration: none;
    color: #ffffff;
    font-size: 18px;
  }
  .credit {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    color: #ffffff;
    font-size: 16px;
  }
  
  .under{
    position: absolute;
    z-index: -888;
    width: 100%;
    top: 280%;
  }
  .under img{
    width: 100%;
  }
}
@media screen and (min-width:640px) and (max-width:767x){
  .appHeader {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(146, 202, 255, 0.05);
  }
  .subHeader {
    width: 85%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .home {
    font-size: 25px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home img {
    width: 50px;
    height: 50px;
  }
  .navigation {
    display: none;
  }
  .humberger {
    display: flex;
  }
  .navigationBar{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color:  #2b3e71;
    font-size: 30px;
    display: none;
  }
  .navigationBar.active{
    display: flex;
  }
  .cancel{
    margin-right: 30px;
    width: 30px;
  }
  .cancel span{
    width: 30px;
    height: 3px;
    background-color: #000000;
  }

  /* landing Page */
  .appLanding {
    width: 100%;
    min-height: 100vh;
  }
  .cloud {
    padding-top: 50px;
    width: 100%;
  }
  .cloud img {
    width: 100%;
    height: 110px;
  }
  .landings {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 10%;
  }
  .landings .landing {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .landing .smallShip {
    position: absolute;
    left: 80px;
    top: -260px;
    width: 350px;
    height: 300px;
  }
  .landing .logoShip {
    position: absolute;
    left:250px;
    top: -80px;
    width: 155px;
    height: 155px;
  }
  .landing .bigShip {
    position: absolute;
    top: -285px;
    left:30px;
    width: 600px;
    height: 400px;
  }
  .landing .subLanding {
    width: 100%;
    position: absolute;
    top: 80px;
    left: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    font-size: 42px;
    font-family: 'fredoka one';
    font-weight: 800;
    color: #ffffff;
  }
  .landing .subLanding2 {
    font-weight: 600;
    text-align: center;
    font-size: 30px;
  }
  .smallShip img,
  .bigShip img,
  .logoShip img {
    width: 100%;
    height: 100%;
  }
  .fish1 img {
    width: 100%;
  }
  .fish2 {
    position: absolute;
    width: 40%;
    z-index: -888;
    top: 280px;
    left: 30px;
  }
  .fish2 img {
    width: 80%;
  }
  .fish3 {
    display: flex;
    position: absolute;
    z-index: -888;
    top: 380px;
    left: 350px;
    width: 40%;
  }
  .fish3 img {
    width: 100%;
    width: 100%;
  }
  .appJourneyIntro{
    margin-top: 50px;
  }
  .subJourney {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2px;
    color: #ffffff;
  }
  .subJourney div:nth-child(1) {
    font-size: 36px;
    letter-spacing: 0;
    text-align: center;
    font-weight: 800;
    font-family: 'fredoka one';
    padding-bottom: 8px;
  }
  .subJourney div:nth-child(2),
  .subJourney div:nth-child(3) {
    font-size: 20px;
    font-weight: 500;
    font-weight: 600;
    font-family: 'fredoka one';
    text-align: center;
  }
  .listSubJourney {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .myswiper{
    width: 100%;
    height: 300px;
    color: #000000;
  }
  .swiper{
    width: 500px;
    height: 300px;
    border-radius: 30px;
    color: #000000;
  }
  .journey {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
  .journey div:nth-child(2) {
    position: absolute;
    font-size: 20px;
    margin-top: 100px;
    padding: 8px 12px 8px 12px;
    border-radius: 10px;
    font-family: 'fredoka one';
    font-weight: 700;
    color: #000000;
    background-color: #8d8d8d81;
  }
  .journey img {
    width: 200px;
    height: 300px;
    margin-bottom: 120px;
  }
  .seeMoreJourney {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .subSeeMore {
    width: 70%;
    height: 20px;
    margin-left: 20px;
  }
  .subSeeMore:hover .seeMore {
    background-color: rgba(241, 244, 254, 0.8);
  }
  .seeMore {
    width: 100%;
    height: 10px;
    font-size: 16px;
    text-align: center;
    border-radius: 20px;
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;
  }
  .subSeeMore:hover .subSeeMore {
    transform: scale(1.1);
  }
  /* TIMELINE */
  .appTimeline {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 100px;
  }
  .appTimeline .tittleTimeline {
    width: 90%;
    text-align: center;
    font-size: 42px;
    font-family: "fredoka one";
    color: #ffffff;
  }
  .listTimelines {
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 30px;
  }
  .listTime {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .timeline {
    width: 80px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;
  }
  .timeline.active {
    background-color: #cfcfcf5d;
  }
  .timeline div {
    font-size: 18px;
    text-align: center;
    font-family: 'fredoka one';
    color: #ffffff;
  }
  .line {
    width: 85%;
    background-color: rgb(255, 255, 255);
    height: 2px;
    position: absolute;
  }
  .circle {
    width: 12px;
    height: 12px;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
  }
  .listContent {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }
  .contentTimeline {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .explaineTimeline {
    width: 550px;
    height: 320px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #6679ac5e;
    border-radius: 30px;
    display: none;
  }
  .explaineTimeline.active {
    display: flex;
  }
  .contentExpTimeline {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
    font-family: "Times New Roman";
  }
  .icon {
    width: 200px;
    height: 180px;
  }
  .content1 {
    font-size: 32px;
    font-family: "fredoka one";
  }
  .content2 {
    width: 400px;
    font-size: 22px;
    text-align: center;
  }
  /* ASKING */
  .appAsking {
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 100px;
  }
  .appAsking .tittleAsk {
    width: 90%;
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    font-family: "fredoka one";
    color: #ffffff;
  }
  .listAsk {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
  }
  .ask.active .answer {
    width: 100%;
    padding: 8px;
    height: 80px;
    margin-top: 10px;
    background-color: rgba(222, 229, 255, 0.8);
    border-radius: 10px;
  }
  /* FOOOTER */
  .appFooter {
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 253, 255, 0.12);  
  }
  .subFooter .event {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
  }
  .director {
    width: 36%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
  }
  .director img {
    width: 40px;
    height: 40px;
  }
  .director div:nth-child(2) {
    text-align: center;
    font-size: 22px;
    font-family: 'fredoka one';
    font-weight: 700;
  }
  .director div:nth-child(3) {
    border-left: 3px solid rgb(255, 255, 255);
    height: 20px;
    font-family: 'fredoka one';
    font-weight: 700;
    font-size: 22px;
    padding-left: 9px;
    display: flex;
    align-items: center;
  }
  .sosmed {
    color: #ffffff;
    font-size: 35px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .sosmed a {
    text-decoration: none;
    color: #ffffff;
    font-size: 20px;
  }
  .credit {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #ffffff;
  }
  .credit div{
    font-size: 16px;
    line-height: 10px;
  }
  .under{
    position: absolute;
    z-index: -888;
    width: 100%;
    top: 290%;
  }
  .under img{
    width: 100%;
    height: 800px;
  }
}
@media screen and (min-width:768px) and (max-width:1020px){
  /* landing Page */
  .appLanding {
    width: 100%;
    min-height: 100vh;
  }
  .cloud {
    padding-top: 50px;
    width: 100%;
  }
  .cloud img {
    width: 100%;
    height: 150px;
  }
  .landings {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: 10%;
  }
  .landings .landing {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .landing .smallShip {
    position: absolute;
    top: -270px;
    left: 40px;
    width: 400px;
    height: 300px;
  }
  .landing .logoShip {
    position: absolute;
    top: -90px;
    left:220px;
    width: 130x;
    height: 130px;
  }
  .landing .bigShip {
    position: absolute;
    top: -300px;
    left: 70px;
    width: 700px;
    height: 450px;
  }
  .landing .subLanding {
    width: 100%;
    position: absolute;
    top: 50px;
    left: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    font-size: 42px;
    font-family: 'fredoka one';
    font-weight: 800;
    letter-spacing: 2px;
    color: #ffffff;
  }
  .landing .subLanding2 {
    font-weight: 600;
    letter-spacing: 3px;
    text-align: center;
    font-size: 32px;
  }
  .smallShip img,
  .bigShip img,
  .logoShip img {
    width: 100%;
    height: 100%;
  }
  .fish1 img {
    width: 100%;
  }
  .fish2 {
    position: absolute;
    width: 60%;
    z-index: -888;
    top: 250px;
    left: 80px;
  }
  .fish2 img {
    width: 50%;
  }
  .fish3 {
    display: flex;
    position: absolute;
    z-index: -888;
    top: 420px;
    left: 450px;
    width: 40%;
  }
  .fish3 img {
    width: 100%;
    width: 100%;
  }
  .appJourneyIntro{
    margin-top: 50px;
  }
  .subJourney {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2px;
    color: #ffffff;
  }
  .subJourney div:nth-child(1) {
    font-size: 42px;
    letter-spacing: 2px;
    text-align: center;
    font-weight: 800;
    font-family: 'fredoka one';
    padding-bottom: 8px;
  }
  .subJourney div:nth-child(2),
  .subJourney div:nth-child(3) {
    font-size: 28px;
    letter-spacing: 2px;
    font-weight: 500;
    font-family: 'fredoka one';
    text-align: center;
  }
  .listSubJourney {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .myswiper{
    width: 100%;
    height: 300px;
    color: #000000;
  }
  .swiper{
    width: 700px;
    height: 500px;
    border-radius: 30px;
    color: #000000;
  }
  .journey {
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
  .journey div:nth-child(2) {
    font-size: 26px;
    padding: 8px 12px 8px 12px;
    border-radius: 10px;
    font-family: 'fredoka one';
    font-weight: 700;
    color: #000000;
    position: absolute;
    bottom: 20px;
    background-color: #8d8d8d81;
  }
  .journey img {
    width: 250px;
    height: 480px;
  }
  .seeMoreJourney {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .subSeeMore {
    width: 70%;
    height: 30px;
    display: flex;
    align-items: center;
    border-radius: 20px;
    background-color: #ffffff;
  }
  .subSeeMore:hover .seeMore {
    background-color: rgba(241, 244, 254, 0.8);
  }
  .seeMore {
    width: 100%;
    text-decoration: none;
    text-align: center;
    color: #000000;
    font-size: 26px;
    cursor: pointer;
  }
  .subSeeMore:hover .subSeeMore {
    transform: scale(1.1);
  }
  /* TIMELINE */
  .appTimeline {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 100px;
  }
  .appTimeline .tittleTimeline {
    width: 90%;
    text-align: center;
    font-size: 48px;
    font-family: "fredoka one";
    color: #ffffff;
  }
  .listTimelines {
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 30px;
  }
  .listTime {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .timeline {
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;
  }
  .timeline.active {
    background-color: #cfcfcf5d;
  }
  .timeline div {
    font-size: 19px;
    text-align: center;
    font-family: 'fredoka one';
    color: #ffffff;
  }
  .line {
    width: 85%;
    background-color: rgb(255, 255, 255);
    height: 2px;
    position: absolute;
  }
  .circle {
    width: 12px;
    height: 12px;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
  }
  .listContent {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contentTimeline {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .explaineTimeline {
    width: 650px;
    height: 320px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #6679ac5e;
    border-radius: 30px;
    display: none;
  }
  .explaineTimeline.active {
    display: flex;
  }
  .contentExpTimeline {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: #ffffff;
    font-family: "Times New Roman";
  }
  .icon {
    width: 200px;
    height: 200px;
  }
  .content1 {
    font-size: 35px;
    font-family: "fredoka one";
  }
  .content2 {
    width: 500px;
    font-size: 24px;
    text-align: center;
  }
  /* ASKING */
  .appAsking {
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 100px;
  }
  .appAsking .tittleAsk {
    width: 90%;
    text-align: center;
    font-size: 42px;
    font-weight: 700;
    letter-spacing: 2px;
    font-family: "fredoka one";
    color: #ffffff;
  }
  .listAsk {
    width: 85%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
    grid-gap: 1rem;
  }
  .ask .question{
    height: 28px;
    display: flex;
    align-items: center;
    font-size: 18px;
  }
  .ask.active .answer {
    width: 100%;
    padding: 8px;
    height: 80px;
    margin-top: 10px;
    background-color: rgba(222, 229, 255, 0.8);
    border-radius: 10px;
  }
  /* FOOOTER */
  .appFooter {
    width: 100%;
    height: 22vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 253, 255, 0.12);  
  }
  .subFooter .event {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
  }
  .director {
    width: 37%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
  }
  .director img {
    width: 50px;
    height: 50px;
  }
  .director div:nth-child(2) {
    text-align: center;
    font-size: 20px;
    font-family: 'fredoka one';
    letter-spacing: 1px;
    font-weight: 500;
  }
  .director div:nth-child(3) {
    border-left: 3px solid rgb(255, 255, 255);
    letter-spacing: 1px;
    height: 30px;
    font-family: 'fredoka one';
    font-size: 20px;
    padding-left: 9px;
    display: flex;
    align-items: center;
    font-weight: 500;

  }
  .sosmed {
    color: #ffffff;
    font-size: 40px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .sosmed a {
    text-decoration: none;
    color: #ffffff;
    font-size: 20px;
    font-weight: 500;
  }
  .credit {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: #ffffff;
  }
  .credit div{
    font-size: 14px;
    line-height: 10px;
    font-weight: 500;

  }
  .under{
    position: absolute;
    z-index: -888;
    width: 100%;
    top: 345%;
  }
  .under img{
    width: 100%;
    height: 800px;
  }
  
}
@media screen and (min-width:1024px) and (max-width:1144px){
  /* landing page */
  .appLanding {
    width: 100%;
    min-height: 100vh;
  }
  .cloud {
    padding-top: 50px;
    width: 100%;
  }
  .cloud img {
    width: 100%;
    height: 200px;
  }
  .landings {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
  }
  .landings .landing {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .landing .smallShip {
    position: absolute; 
    margin-bottom: 0;
    left: 80px;
    width: 500px;
    height: 400px;
  }
  .landing .logoShip {
    position: absolute;
    top: 0px;
    left: 340px;
    width: 180px;
    height: 180px;
  }
  .landing .bigShip {
    position: absolute;
    top: -280px;
    right: 20px;
    width: 820px;
    height: 600px;
  }
  .landing .subLanding {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    top: 80px;
    left: 80px;
    gap: 8px;
    font-size: 52px;
    font-family: 'fredoka one';
    font-weight: 800;
    letter-spacing: 4px;
    color: #ffffff;
  }
  .landing .subLanding2 {
    font-weight: 600;
    letter-spacing: 5px;
    text-align: center;
    font-size: 45px;
  }
  .smallShip img,
  .bigShip img,
  .logoShip img {
    width: 100%;
    height: 100%;
  }
  .fish1 img {
    position: absolute;
    width: 100%;
    height: 100vh;
  }
  .fish2 {
    position: absolute;
    top: 500px;
    left: 60%;
    width: 40%;
    z-index: -888;
  }
  .fish2 img {
    width: 100%;
  }
  .fish3 {
    position: absolute;
    z-index: -88;
    top: 50%;
    left: 10%;
    width: 400px;
  }
  .fish3 img {
    width: 100%;
  }
  
  /* Journey  */
  .appJourneyIntro {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
  }
  .subJourney {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2px;
    color: #ffffff;
  }
  .subJourney div:nth-child(1) {
    font-size: 48px;
    letter-spacing: 5px;
    font-weight: 700;
  }
  .subJourney div:nth-child(2),
  .subJourney div:nth-child(3) {
    font-size: 32px;
    font-weight: 500;
  }
  .listJourney {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .listSubJourney {
    width: 100%;
    height: 100%;
  }
  .myswiper{
    width: 100%;
  }
  .swiper{
    width: 900px;
    height: 800px;
  }
  .journey {
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  .journey div:nth-child(2) {
    font-size: 30px;
    padding: 8px 12px 8px 12px;
    border-radius: 10px;
    font-family: 'fredoka one';
    font-weight: 500;
    color: #000000;
    background-color: #e5e5e581;
  }
  .journey:hover div:nth-child(2) {
    transform: translateY(10px);
  }
  .journey img {
    width: 400px;
    height: 700px;
  }
  .seeMoreJourney {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .subSeeMore {
    width: 65%;
    text-align: center;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: #ffffff;
    cursor: pointer;
  }
  .subSeeMore:hover .seeMore {
    background-color: rgba(241, 244, 254, 0.8);
  }
  .seeMore {
    font-size: 32px;
    text-decoration: none;
    color: #000000;
  }
  .seeMore div{
    width: 100%;
  }
  .subSeeMore:hover .subSeeMore {
    transform: scale(1.1);
  }
  /* TIMELINE */
  .appTimeline {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
  .appTimeline .tittleTimeline {
    width: 100%;
    text-align: center;
    font-size: 62px;
    font-family: "fredoka one";
    color: #ffffff;
  }
  .listTimelines {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #404d715e;
    padding: 30px;
    border-radius: 30px;
  }
  .listTime {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .timeline {
    width: 150px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;
  }
  .timeline.active {
    background-color: #cfcfcf5d;
  }
  .timeline div {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: #ffffff;
  }
  .line {
    width: 80%;
    background-color: rgb(255, 255, 255);
    height: 2px;
    position: absolute;
  }
  .circle {
    width: 15px;
    height: 15px;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
  }
  .listContent {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }
  .contentTimeline {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .explaineTimeline {
    width: 900px;
    height: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #6679ac5e;
    border-radius: 30px;
    display: none;
  }
  .explaineTimeline.active {
    display: flex;
  }
  .contentExpTimeline {
    width: 550px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
    font-family: "Times New Roman";
    font-size: 20px;
    word-spacing: 2px;
    text-align: center;
  }
  .icon {
    width: 200px;
  }
  .content1 {
    font-size: 40px;
    font-family: "fredoka one";
  }
  .content2 {
    font-size: 24px;
    font-family: "fredoka one";
  }
  /* ASKING */
  
  .appAsking {
    width: 100%;
    min-height: 80vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;
  }
  .appAsking .tittleAsk {
    width: 80%;
    text-align: center;
    font-size: 50px;
    font-family: "fredoka one";
    color: #ffffff;
  }
  .listAsk {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(900px, 1fr));
    grid-gap: 1rem;
  }
  .ask {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .ask .question {
    background-color: rgba(222, 229, 255, 0.8);
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    font-size: 24px;
    cursor: pointer;
  }
  .ask:hover .question {
    background-color: rgba(241, 244, 254, 0.8);
  }
  .ask .answer {
    width: 100%;
    height: 0;
    font-size: 24px;
    overflow: hidden;
    transition: 0.6s;
  }
  .ask.active .answer {
    width: 100%;
    padding: 8px;
    height: 60px;
    margin-top: 10px;
    background-color: rgba(222, 229, 255, 0.8);
    border-radius: 10px;
  }
  .under{
    position: absolute;
    z-index: -888;
    width: 100%;
    top: 375%;
  }
  .under img{
    width: 100%;
    height: 800px;
  }
}
@media screen and (min-width:1144px) and (max-width:1280px){
  /* landing page */
  .appLanding {
    width: 100%;
    min-height: 100vh;
  }
  .cloud {
    padding-top: 50px;
    width: 100%;
  }
  .cloud img {
    width: 100%;
    height: 200px;
  }
  .landings {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
  }
  .landings .landing {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .landing .smallShip {
    position: absolute; 
    margin-bottom: 200px;
    left: 80px;
    width: 500px;
    height: 400px;
  }
  .landing .logoShip {
    position: absolute;
    top: -100px;
    left: 340px;
    width: 180px;
    height: 180px;
  }
  .landing .bigShip {
    position: absolute;
    top: -380px;
    right: 20px;
    width: 820px;
    height: 600px;
  }
  .landing .subLanding {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    top: 80px;
    left: 80px;
    gap: 8px;
    font-size: 52px;
    font-family: 'fredoka one';
    font-weight: 800;
    letter-spacing: 4px;
    color: #ffffff;
  }
  .landing .subLanding2 {
    font-weight: 600;
    letter-spacing: 5px;
    text-align: center;
    font-size: 45px;
  }
  .smallShip img,
  .bigShip img,
  .logoShip img {
    width: 100%;
    height: 100%;
  }
  .fish1 img {
    position: absolute;
    width: 100%;
    height: 100vh;
  }
  .fish2 {
    position: absolute;
    top: 500px;
    left: 60%;
    width: 40%;
    z-index: -888;
  }
  .fish2 img {
    width: 100%;
  }
  .fish3 {
    position: absolute;
    z-index: -88;
    top: 50%;
    left: 10%;
    width: 400px;
  }
  .fish3 img {
    width: 100%;
  }
  
  /* Journey  */
  .appJourneyIntro {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
  }
  .subJourney {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2px;
    color: #ffffff;
  }
  .subJourney div:nth-child(1) {
    font-size: 48px;
    letter-spacing: 5px;
    font-weight: 700;
  }
  .subJourney div:nth-child(2),
  .subJourney div:nth-child(3) {
    font-size: 32px;
    font-weight: 500;
  }
  .listJourney {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .listSubJourney {
    width: 100%;
    height: 100%;
  }
  .myswiper{
    width: 100%;
  }
  .swiper{
    width: 900px;
    height: 800px;
  }
  .journey {
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  .journey div:nth-child(2) {
    font-size: 30px;
    padding: 8px 12px 8px 12px;
    border-radius: 10px;
    font-family: 'fredoka one';
    font-weight: 500;
    color: #000000;
    background-color: #e5e5e581;
  }
  .journey:hover div:nth-child(2) {
    transform: translateY(10px);
  }
  .journey img {
    width: 400px;
    height: 700px;
  }
  .seeMoreJourney {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .subSeeMore {
    width: 65%;
    text-align: center;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background-color: #ffffff;
    cursor: pointer;
  }
  .subSeeMore:hover .seeMore {
    background-color: rgba(241, 244, 254, 0.8);
  }
  .seeMore {
    font-size: 32px;
    text-decoration: none;
    color: #000000;
  }
  .seeMore div{
    width: 100%;
  }
  .subSeeMore:hover .subSeeMore {
    transform: scale(1.1);
  }
  /* TIMELINE */
  .appTimeline {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
  .appTimeline .tittleTimeline {
    width: 100%;
    text-align: center;
    font-size: 62px;
    font-family: "fredoka one";
    color: #ffffff;
  }
  .listTimelines {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #404d715e;
    padding: 30px;
    border-radius: 30px;
  }
  .listTime {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .timeline {
    width: 150px;
    height: 90px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;
  }
  .timeline.active {
    background-color: #cfcfcf5d;
  }
  .timeline div {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: #ffffff;
  }
  .line {
    width: 80%;
    background-color: rgb(255, 255, 255);
    height: 2px;
    position: absolute;
  }
  .circle {
    width: 15px;
    height: 15px;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
  }
  .listContent {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }
  .contentTimeline {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .explaineTimeline {
    width: 900px;
    height: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #6679ac5e;
    border-radius: 30px;
    display: none;
  }
  .explaineTimeline.active {
    display: flex;
  }
  .contentExpTimeline {
    width: 550px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
    font-family: "Times New Roman";
    font-size: 20px;
    word-spacing: 2px;
    text-align: center;
  }
  .icon {
    width: 200px;
  }
  .content1 {
    font-size: 40px;
    font-family: "fredoka one";
  }
  .content2 {
    font-size: 24px;
    font-family: "fredoka one";
  }
  /* ASKING */
  
  .appAsking {
    width: 100%;
    min-height: 80vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;
  }
  .appAsking .tittleAsk {
    width: 80%;
    text-align: center;
    font-size: 50px;
    font-family: "fredoka one";
    color: #ffffff;
  }
  .listAsk {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(900px, 1fr));
    grid-gap: 1rem;
  }
  .ask {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .ask .question {
    background-color: rgba(222, 229, 255, 0.8);
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    font-size: 24px;
    cursor: pointer;
  }
  .ask:hover .question {
    background-color: rgba(241, 244, 254, 0.8);
  }
  .ask .answer {
    width: 100%;
    height: 0;
    font-size: 24px;
    overflow: hidden;
    transition: 0.6s;
  }
  .ask.active .answer {
    width: 100%;
    padding: 8px;
    height: 60px;
    margin-top: 10px;
    background-color: rgba(222, 229, 255, 0.8);
    border-radius: 10px;
  }
  .under{
    position: absolute;
    z-index: -888;
    width: 100%;
    top: 375%;
  }
  .under img{
    width: 100%;
    height: 800px;
  }
}