import "./App.css";
import React, { useState, useEffect } from "react";
import {
  Headline,
  Heroimg,
  Herosection,
  Info,
  Items,
  Line,
  Links,
  Links2,
  Logo,
  Monkeyimg,
  Navbar,
  Row,
  Textdiv,
  Watchimg,
} from "./Globalstyles";
import Background from "./assets/Lion (1).png";
import logo from "./assets/image 1 (2).png";
import Homebtn from "./assets/Group 8.png";
import Aboutbtn from "./assets/About Us.png";
import Goalbtn from "./assets/Goals.png";
import btns from "./assets/Group 6.png";
import Monkey from "./assets/Card.png";
import Watch from "./assets/Group 12.png";
import line from "./assets/Group 13.png";
import { useAnimation, useInView } from "framer-motion";
function App() {
  const initial = { opacity: 0, y: -10 };
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (!inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);
  return (
    <>
      <Herosection ref={ref}>
        <Heroimg
          src={Background}
          initial={initial}
          transition={{ delay: 0.1, duration: 0.2 }}
          animate={animation}
        />
        <Navbar>
          <Logo
            initial={initial}
            transition={{ delay: 0.2, duration: 0.8 }}
            animate={animation}
            src={logo}
          />
          <Row
            initial={initial}
            transition={{ delay: 0.4, duration: 0.8 }}
            animate={animation}
          >
            {" "}
            <Links color="s">Home</Links>
            <Links>About Us</Links>
            <Links>Goals</Links>
          </Row>{" "}
          <Row
            initial={initial}
            transition={{ delay: 0.6, duration: 0.5 }}
            animate={animation}
          >
            {" "}
            <Items src={btns} />
          </Row>{" "}
        </Navbar>
        <Row>
          <Monkeyimg
            initial={initial}
            transition={{ delay: 0.8, duration: 0.8 }}
            animate={animation}
            src={Monkey}
          />
          <Watchimg
            initial={initial}
            transition={{ delay: 0.9, duration: 0.8 }}
            animate={animation}
            src={Watch}
          />
          <Textdiv>
            <Headline
              initial={initial}
              transition={{ delay: 1, duration: 0.8 }}
              animate={animation}
            >
              WHY KILLED ANIMALS
            </Headline>
            <Info
              initial={initial}
              transition={{ delay: 1.1, duration: 0.8 }}
              animate={animation}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              feugiat aliquam amet, enim etiam mattis ac tortor. Diam nunc,
              conguer
            </Info>
          </Textdiv>
          <Line
            initial={initial}
            transition={{ delay: 1.3, duration: 0.8 }}
            animate={animation}
            src={line}
          />
        </Row>
      </Herosection>
    </>
  );
}

export default App;
