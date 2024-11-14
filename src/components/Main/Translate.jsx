import React, { useContext, useState, useRef, useEffect } from 'react'
import { curve, heroBackground, robot } from "../../assets";
import './translate1.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import { BackgroundCircles } from '../design/Hero';


const Python = "python";
const java = "JAVA";
const javaScript = "JavaScript";
const c = "C";
const cPluse = "C++";
const CSharp = "C#";
const objectiveC = "Objective C";
const html = "HTML";
const css = "CSS";
const react = "React JS";
const node = "Node JS";
const ruby = "Ruby";
const perl = "Perl";
const go = "Go Lang";
const rust = "Rust";
const matlab = "MATLAB";
const kotlin = "KOTLIN";
const swift = "Swift";
const typeSript = "TypeScript";
const sql = "SQL";
const php = "PHP";
const scala = "Scala";
const shell = "Shell";
const lua = "Lua";
const dart = "Dart";
const assembly = "Assembly";


const Translate = () => {

    const { slidStyles, slideForward, slideBackword, transInput, setTransInput, onSent, transLoading, langSelected, setLangSelected, handelTranslateBtn, translatedResult } = useContext(Context)

    const objective_c_style = {
        fontSize: '16px',
    }

    const perl_style = {
        padding: '13px'
    }

    const flutter_style = {
        padding: '18px'
    }


    const paragraphRefs = useRef({});

    useEffect(() => {
        // Assign refs to paragraph elements once the component is mounted
        paragraphRefs.current[1] = document.getElementById('paragraph1');
        paragraphRefs.current[2] = document.getElementById('paragraph2');
        paragraphRefs.current[3] = document.getElementById('paragraph3');
        paragraphRefs.current[4] = document.getElementById('paragraph4');
        paragraphRefs.current[5] = document.getElementById('paragraph5');
        paragraphRefs.current[6] = document.getElementById('paragraph6');
        paragraphRefs.current[7] = document.getElementById('paragraph7');
        paragraphRefs.current[8] = document.getElementById('paragraph8');
        paragraphRefs.current[9] = document.getElementById('paragraph9');
        paragraphRefs.current[10] = document.getElementById('paragraph10');
        paragraphRefs.current[11] = document.getElementById('paragraph11');
        paragraphRefs.current[12] = document.getElementById('paragraph12');
        paragraphRefs.current[13] = document.getElementById('paragraph13');
        paragraphRefs.current[14] = document.getElementById('paragraph14');
        paragraphRefs.current[15] = document.getElementById('paragraph15');
        paragraphRefs.current[16] = document.getElementById('paragraph16');
        paragraphRefs.current[17] = document.getElementById('paragraph17');
        paragraphRefs.current[18] = document.getElementById('paragraph18');
        paragraphRefs.current[19] = document.getElementById('paragraph19');
        paragraphRefs.current[20] = document.getElementById('paragraph20');
        paragraphRefs.current[21] = document.getElementById('paragraph21');
        paragraphRefs.current[22] = document.getElementById('paragraph22');
        paragraphRefs.current[23] = document.getElementById('paragraph23');
        paragraphRefs.current[24] = document.getElementById('paragraph24');
        paragraphRefs.current[25] = document.getElementById('paragraph25');
        paragraphRefs.current[26] = document.getElementById('paragraph26');
        paragraphRefs.current[27] = document.getElementById('paragraph27');
        paragraphRefs.current[28] = document.getElementById('paragraph28');
        paragraphRefs.current[29] = document.getElementById('paragraph29');
        paragraphRefs.current[30] = document.getElementById('paragraph30');
        paragraphRefs.current[31] = document.getElementById('paragraph31');
        paragraphRefs.current[32] = document.getElementById('paragraph32');
        paragraphRefs.current[33] = document.getElementById('paragraph33');
        paragraphRefs.current[34] = document.getElementById('paragraph34');
        paragraphRefs.current[35] = document.getElementById('paragraph35');
        paragraphRefs.current[36] = document.getElementById('paragraph36');
        paragraphRefs.current[37] = document.getElementById('paragraph37');
        paragraphRefs.current[38] = document.getElementById('paragraph38');
        paragraphRefs.current[39] = document.getElementById('paragraph39');
        paragraphRefs.current[40] = document.getElementById('paragraph40');
        paragraphRefs.current[41] = document.getElementById('paragraph41');
        paragraphRefs.current[42] = document.getElementById('paragraph42');
        paragraphRefs.current[43] = document.getElementById('paragraph43');
        paragraphRefs.current[44] = document.getElementById('paragraph44');
        paragraphRefs.current[45] = document.getElementById('paragraph45');
        paragraphRefs.current[46] = document.getElementById('paragraph46');
        paragraphRefs.current[47] = document.getElementById('paragraph47');
        paragraphRefs.current[48] = document.getElementById('paragraph48');
        paragraphRefs.current[49] = document.getElementById('paragraph49');
        paragraphRefs.current[50] = document.getElementById('paragraph50');
        paragraphRefs.current[51] = document.getElementById('paragraph51');


        // Add more refs as needed
    }, []);

    const handleLangSelect = (id) => {
        const paragraphContent = paragraphRefs.current[id]?.textContent;
        if (paragraphContent) {
            console.log(paragraphContent);
            setLangSelected(paragraphContent);
        } else {
            console.log("Paragraph content not found");
        }
    };



    return (
        <>
            <div className='translate-container' style={{
                backgroundImage: `url(${heroBackground})`,
                backgroundSize: 'cover', // Adjust as needed (e.g., 'contain', 'auto')
                backgroundPosition: 'center', // Adjust as needed
                height: '100vh', // Set height as needed
                width: '100%', // Set width as needed
            }}>
                <div className='transcircles' style={{ position: 'relative', zIndex: '0', top: '65vh', }}><BackgroundCircles /></div>
                <div className='lang-input-container'>
                    <textarea onChange={(e) => setTransInput(e.target.value)} value={transInput} placeholder='Enter Your Code Here' className='lang-input  bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex' name="" id=""></textarea>
                    {/* <img src={assets.loading_icon} alt="" /> */}
                    <div className="middle_div">
                        <div className="selected-lang  bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">{langSelected}</div>
                        {transLoading ? <span className="translate-loader"></span> : null}
                    </div>
                    <div id='output-div' className='lang-output  bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex'>{transLoading ? <div>
                    </div> : translatedResult}</div>
                </div>
                <div className="transalte-bottom">
                    <img onClick={slideBackword} className='back-btn bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex' src={assets.back_icon} alt="" />
                    <div className="testimonials">
                        <div style={slidStyles} className="slider">
                            <div className="slide">
                                <div onClick={() => handleLangSelect(1)} className="card1">
                                    <img className='img' src={assets.python_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph1" className='text head'>Python</p>
                                        {/* <span>Cryptocurrency</span>
                                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(2)} className="card1">
                                    <img className='img' src={assets.java_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph2" className="text head">JAVA</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(3)} className="card1">
                                    <img className='img' src={assets.C_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph3" className="text head">C</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(4)} className="card1">
                                    <img className='img' src={assets.Cpluse_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph4" className="text head">C++</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(5)} className="card1">
                                    <img className='img' src={assets.csharp_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph5" className="text head">C#</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(6)} className="card1">
                                    <img className='img' src={assets.javascript_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph6" className="text head">JavaScript</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(7)} className="card1">
                                    <img className='img' src={assets.html_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph7" className="text head">HTML</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(8)} className="card1">
                                    <img className='img' src={assets.css_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph8" className="text head">CSS</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(9)} className="card1">
                                    <img className='img' src={assets.react_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph9" className="text head">React JS</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(10)} className="card1">
                                    <img className='img' src={assets.node_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph10" className="text head">Node JS</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(11)} className="card1">
                                    <img className='img' src={assets.nextjs_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph11" className="text head"
                                            style={{
                                                color: 'white',
                                            }}>Next JS</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(12)} className="card1">
                                    <img className='img' src={assets.react_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph12" className="text head"
                                            style={{
                                                fontSize: '20px'
                                            }}>React Native</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(13)} className="card1">
                                    <img className='img' src={assets.rust_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph13" className="text head"
                                            style={{
                                                color: 'white',
                                            }}>Rust</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(14)} className="card1">
                                    <img className='img' src={assets.go_logo} alt="" style={{ height: '60px' }} />
                                    <div className="textBox">
                                        <p id="paragraph14" className="text head">Go</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(15)} className="card1">
                                    <img className='img' src={assets.kotlin_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph15" className="text head">Kotlin</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(16)} className="card1">
                                    <img className='img' src={assets.ruby_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph16" className="text head">Ruby</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(17)} className="card1">
                                    <img className='img' src={assets.swift_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph17" className="text head">Swift</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(18)} className="card1">
                                    <img className='img' src={assets.typeScript_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph18" className="text head">TypeScript</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(19)} className="card1">
                                    <img className='img' src={assets.sql_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph19" className="text head">SQL</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(20)} className="card1">
                                    <img className='img' src={assets.php_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph20" className="text head">PHP</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(21)} className="card1">
                                    <img className='img' src={assets.shell_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph21" className="text head">Shell</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(22)} className="card1">
                                    <img className='img' src={assets.scala_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph22" className="text head">Scala</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(23)} className="card1">
                                    <img className='img' src={assets.matlab_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph23" className="text head">MATLAB</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(24)} className="card1">
                                    <img className='img' src={assets.lua_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph24" className="text head">Lua</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(25)} className="card1">
                                    <img className='img' src={assets.perl_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph25" className="text head">Perl</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(26)} className="card1">
                                    <img className='img' src={assets.Dart_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph26" className="text head">Dart</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(27)} className="card1">
                                    <img className='img' src={assets.r_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph27" className="text head">R</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(28)} className="card1">
                                    <img className='img' src={assets.assembly_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph28" className="text head">Assembly</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(29)} className="card1">
                                    <img className='img' src={assets.flutter_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph29" className="text head">Flutter</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(30)} className="card1">
                                    <img className='img' src={assets.julia_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph30" className="text head">Julia</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(31)} className="card1">
                                    <img className='img' src={assets.groovy_logo} alt=""
                                        style={{
                                            height: '200px',
                                            width: '145px'
                                        }} />
                                    <div className="textBox">
                                        <p id="paragraph31" className="text head">Groovy</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(32)} className="card1">
                                    <img className='img' src={assets.visual_basic} alt=""
                                        style={{
                                            width: '145px'
                                        }} />
                                    <div className="textBox">
                                        <p id="paragraph32" className="text head"
                                            style={{ fontSize: '20px' }}>Visual Basic</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(33)} className="card1">
                                    <img className='img' src={assets.lisp_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph33" className="text head">Lisp</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(34)} className="card1">
                                    <img className='img' src={assets.tcl_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph34" className="text head">TCL</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(35)} className="card1">
                                    <img className='img' src={assets.cobol_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph35" className="text head"
                                            style={{
                                                color: 'white',
                                            }}>COBOL</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(36)} className="card1">
                                    <img className='img' src={assets.erlang_logo} alt=""
                                        style={{
                                            width: '145px'
                                        }} />
                                    <div className="textBox">
                                        <p id="paragraph36" className="text head">Erlang</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(37)} className="card1">
                                    <img className='img' src={assets.fortran_logo} alt=""
                                        style={{
                                            width: '145px'
                                        }} />
                                    <div className="textBox">
                                        <p id="paragraph37" className="text head">FORTRAN</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(38)} className="card1">
                                    <img className='img' src={assets.scheme_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph38" className="text head">Scheme</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(39)} className="card1">
                                    <img className='img' src={assets.ada_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph39" className="text head">Ada</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(40)} className="card1">
                                    <img className='img' src={assets.prolog_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph40" className="text head">Prolog</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(41)} className="card1">
                                    <img className='img' src={assets.haskell_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph41" className="text head">Haskell</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(42)} className="card1">
                                    <img className='img' src={assets.smalltalk_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph42" className="text head">Smalltalk</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(43)} className="card1">
                                    <img className='img' src={assets.actionscript_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph43" className="text head"
                                            style={{
                                                fontSize: '20px'
                                            }}>ActionScript</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(44)} className="card1">
                                    <img className='img' src={assets.vhdl_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph44" className="text head">VHDL</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(45)} className="card1">
                                    <img className='img' src={assets.delphi_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph45" className="text head">Delphi</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(46)} className="card1">
                                    <img className='img' src={assets.coldfusion_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph46" className="text head"
                                            style={{ color: 'white' }}>ColdFusion</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(47)} className="card1">
                                    <img className='img' src={assets.apex_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph47" className="text head">Apex</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(48)} className="card1">
                                    <img className='img' src={assets.powershell_logo} alt=""
                                        style={{ width: '300px', height: 'auto' }} />
                                    <div className="textBox">
                                        <p id="paragraph48" className="text head">PowerShell</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(49)} className="card1">
                                    <img className='img' src={assets.coffeescript_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph49" className="text head"
                                            style={{
                                                fontSize: '20px',
                                                color: 'white'
                                            }}>CoffeeScript</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(50)} className="card1">
                                    <img className='img' src={assets.vbscript_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph50" className="text head">VBScript</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="slide">
                                <div onClick={() => handleLangSelect(51)} className="card1">
                                    <img className='img' src={assets.abap_logo} alt="" />
                                    <div className="textBox">
                                        <p id="paragraph51" className="text head">ABAP</p>
                                        {/* <span>Cryptocurrency</span>
                    <p className="text price">1.654,34€</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img onClick={slideForward} className='next-btn bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex' src={assets.next_icon} alt="" />
                </div>
                <div className="translate-btn-container">
                    {/* <button onClick={handelTranslateBtn} type="button" className="translate-button">
                        <div className="translate-button-top">Translate</div>
                        <div className="translate-button-bottom"></div>
                        <div className="translate-button-base"></div>
                    </button> */}
                    <button onClick={handelTranslateBtn} className="btn">Convert</button>
                </div>
            </div >
        </>
    )
}

export default Translate