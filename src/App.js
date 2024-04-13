//                       _oo0oo_                      //
//                      o8888888o                     //
//                      88" . "88                     //
//                      (| -_- |)                     //
//                      0\  =  /0                     //
//                    ___/`---'\___                   //
//                  .' \\|     |// '.                 //
//                 / \\|||  :  |||// \                //
//                / _||||| -:- |||||- \               //
//               |   | \\\  -  /// |   |              //
//               | \_|  ''\---/''  |_/ |              //
//               \  .-\__  '-'  ___/-. /              //
//             ___'. .'  /--.--\  `. .'___            //
//          ."" '<  `.___\_<|>_/___.' >' "".          //
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |        //
//         \  \ `_.   \_ __\ /__ _/   .-` /  /        //
//     =====`-.____`.___ \_____/___.-`___.-'=====     //
//                       `=---='                      //
//                                                    //
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~     //
//            Phật phù hộ, không bao giờ BUG          //
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~     // 

import './App.css';
import Home from './components/homepage/Home';
import NavBar from './components/navbar/NavBar';
import { Parallax } from './components/parallax/Parallax';
import Portfolio from './components/my-work/Portfolio';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <section className="section-1" id="Home">
        <NavBar/>
        <Home/>
      </section>
      <section className="section-2" id="Services"><Parallax type="services"/></section>
      <Portfolio className="portfolio" id="Project"/>
      <section className="section-3"><Parallax type="portfolio"/></section>
      <section className="section-4"><Contact/></section>
    </div>
  );
}

export default App;
