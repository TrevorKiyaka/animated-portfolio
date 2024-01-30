import { useRef } from 'react';
import './parallax.scss';
import { motion,useScroll, useTransform } from 'framer-motion';
//pass the type as a prop to notify whether its services or portfolio section

const Parallax = ({ type }) => {

    const ref = useRef();

    const {scrollYProgress} =useScroll({
       target:ref,
       offset:["start start", "end start"] //animation starts at the top of the view point and ends at start point
       //past the viewpoint

    })

    //enables xx or y motion direction
    const yBg =useTransform(
        scrollYProgress,
        [0,1], //begins from zero till 1 which denotes the end
        ["0%","300%"] //changes the property 
        )
        const yText = useTransform(
            scrollYProgress, 
            [0, 1], 
            ["0%", "300%"]);
        return (
            <div
              className="parallax"
              ref={ref}
              style={{
                background:
                  type === "services"
                    ? "linear-gradient(180deg, #111132, #0c0c1d)"
                    : "linear-gradient(180deg, #111132, #505064)",
              }}
            >
              <motion.h1 style={{ y: yText }}>
                {type === "services" ? "What We Do?" : "What We Did?"}
              </motion.h1>
              <motion.div className="mountains"></motion.div>
              <motion.div
                className="planets"
                style={{
                  y: yBg,
                  backgroundImage: `url(${
                    type === "services" ? "/planets.png" : "/sun.png"
                  })`,
                }}
              ></motion.div>
              <motion.div style={{ x: yBg }} className="stars"></motion.div>
            </div>
          );
        };
        
        export default Parallax;