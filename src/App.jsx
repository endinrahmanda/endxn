import React, { useState } from "react";
import fotoProfil from "./assets/img/endin.jpeg";

import TOEFL from "./assets/sertifikat/TOEFL.jpeg";
import TOEIC from "./assets/sertifikat/TOEIC.png";
import JNA from "./assets/sertifikat/BNSP_Junior Network Adminstrator.png";
import JWD from "./assets/sertifikat/BNSP_Junior Web Developer.png";
import LAN from "./assets/sertifikat/BNSP_Local Area Network Engineer.png";
import MTCNA from "./assets/sertifikat/MTCNA.jpg";


export default function App() {
  const [activeTab, setActiveTab] = useState("Skills");
  const [selectedCert, setSelectedCert] = useState(null);

  const skills = [
    { name: "Linux", icon: "fa-ubuntu", type: "fab" },
    { name: "Python", icon: "fa-python", type: "fab" },
    { name: "Laravel", icon: "fa-laravel", type: "fab" },
    { name: "Flask", icon: "fa-code", type: "fas" },
    { name: "React.js", icon: "fa-react", type: "fab" },
    { name: "Bootstrap", icon: "fa-bootstrap", type: "fab" },
    { name: "Tailwind", icon: "fa-code", type: "fas" },
    { name: "MySQL", icon: "fa-server", type: "fas" },
    { name: "Figma", icon: "fa-figma", type: "fab" },
  ];

  const certificates = [
    { title: "TOEFL", image: TOEFL },
    { title: "TOEIC", image: TOEIC },
    { title: "Junior Network Adminstrator", image: JNA },
    { title: "Junior Web Developer", image: JWD },
    { title: "Local Area Network Engineer", image: LAN },
    { title: "MTCNA", image: MTCNA },
  ];

  return (
    <div className=" text-base-content flex flex-col max-w-4xl mx-auto pb-6">
      <div className="flex items-start gap-6">
        <div>
          <img
            src={fotoProfil}
            alt="profile"
            className="w-28 rounded-full mx-auto border-2 border-gray-200"
          />
        </div>
        <div>
          <h1 className="mt-4 text-2xl font-bold pt-4">
            Hey, it's <span className="text-primary">ENDIN RAHMANDA</span> 👋
          </h1>
          <p className="text-green-400 mt-1">● Available for Work</p>
        </div>
      </div>

      <div className="max-w-xl mt-6">
        <p className="text-lg font-bold">
          23 years old, exploring the world of code 🌱
        </p>
        <p className="mt-2 text-sm opacity-80">
          I’ve built projects using <b>Flask</b> and <b>Python</b> with libraries like <b>scikit-learn, pandas,</b> and <b>NumPy</b>, along with <b>React, Bootstrap </b> and <b>Tailwind </b> on the front end.
          I’m also gaining experience in <b>Figma</b> and <b>Laravel</b>.
        </p>
      </div>

      <div className="flex gap-4 mt-6">
        <a className="btn btn-primary btn-sm" href="https://drive.google.com/file/d/1ILwCgpWuEXGnMVpOHanmEQouBdVIS3XE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          Resume <i className="fa-solid fa-file-arrow-down"></i>
        </a>
        <a
          className="btn btn-outline btn-sm"
          href="https://github.com/endinrahmanda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          className="btn btn-outline btn-sm"
          href="https://www.linkedin.com/in/endinrahmanda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          className="btn btn-outline btn-sm"
          href="mailto:endinrhmnd@gmail.com"
        >
          <i className="fa fa-envelope"></i>
        </a>
      </div>

      {/* Tabs */}
      <div className="mt-10 tabs tabs-boxed">
        <a
          className={`tab ${activeTab === "Skills" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("Skills")}
        >
          What I use
        </a>
        <a
          className={`tab ${activeTab === "Education" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("Education")}
        >
          Education
        </a>
        <a
          className={`tab ${activeTab === "Publications" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("Publications")}
        >
          Publications
        </a>
        <a
          className={`tab ${activeTab === "Certificate" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("Certificate")}
        >
          Certificate
        </a>
        <a
          className={`tab ${activeTab === "Projects" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("Projects")}
        >
          Projects
        </a>
      </div>

      {activeTab === "Skills" && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="card bg-base-300 shadow-md p-4 flex flex-col items-center"
            >
              <i className={`${skill.type} ${skill.icon} text-3xl`}></i>
              <p className="mt-2 font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === "Education" && (
        <div className="mt-10 space-y-4 text-justify">
          <div className="bg-base-300 shadow-md p-6 rounded-md">
            <h2 className="text-xl font-bold mb-2">SMK Negeri 1 Turen</h2>
            <p className="text-sm opacity-80 mb-2">
              <span className="font-semibold">Major:</span> Teknik Komputer dan Jaringan (2016 - 2019)
            </p>
            <p className="text-sm opacity-80">
              During my studies, I developed fundamental knowledge of
              <b> computer networks</b>, particularly <b>Mikrotik configuration</b> and
              <b> local area network (LAN) engineering</b>.
              I also had the opportunity to complete an internship at the{" "}
              <i>Pengelola Sistem Informasi dan Kehumasan Fakultas (PSIK)</i> of the Faculty of Economics
              and Business, Universitas Brawijaya. My responsibilities included:
            </p>
            <ul className="list-disc list-inside text-sm opacity-80 mt-2">
              <li>Troubleshooting computer hardware, software, and network issues</li>
              <li>Setting up and configuring access points (AP)</li>
              <li>Installing and maintaining LAN cable infrastructure</li>
              <li>Providing routine maintenance for network systems</li>
            </ul>
          </div>

          <div className="bg-base-300 shadow-md p-6 rounded-md">
            <h2 className="text-xl font-bold mb-2">UPN Veteran Jawa Timur</h2>
            <p className="text-sm opacity-80 mb-2">
              <span className="font-semibold">Bachelor’s Degree:</span> Informatics (2020 - 2025)
              <br />
              <span className="font-semibold">GPA:</span> 3.59
            </p>
            <p className="text-sm opacity-80">
              Throughout my studies, I focused on software development, web technologies, and data science. For my undergraduate thesis, I conducted research on <b>“Classification of Thyroid Cancer Recurrence Using Stack Ensemble and SMOTE”.</b>
              The study utilized the Differentiated Thyroid Cancer Recurrence dataset from the UCI Machine Learning Repository and was implemented in <b>Python</b> using libraries such as <b>pandas, numpy, matplotlib, seaborn, scikit-learn, imbalanced-learn, </b>and <b> joblib </b>.
            </p>
            <p className="text-sm opacity-80 mt-2">
              In this work, I applied a <b>stack ensemble learning </b> approach, which combines multiple base models like <b>Decision Tree, Support Vector Machine (SVM), </b> and <b>Logistic Regression </b> in order to achieve better predictive performance compared to individual models.
              To address the issue of class imbalance in the dataset, I used <b>SMOTE (Synthetic Minority Over-sampling Technique)</b>, a method that generates synthetic samples for underrepresented classes to improve model fairness and accuracy.
              The project was further deployed as a <b> Flask-based web application </b> and successfully registered as an intellectual property with registration number <b>EC002025073061.</b>
            </p>
          </div>
        </div>
      )}
      {activeTab === "Publications" && (
        <div className="mt-10 space-y-4">
          {[
            {
              title: "KLASIFIKASI PERULANGAN KANKER TIROID MENGGUNAKAN STACK ENSEMBLE DAN SMOTE",
              source: "JATI (Jurnal Mahasiswa Teknik Informatika)",
              date: "May 1, 2025",
              link: "https://ejournal.itn.ac.id/index.php/jati/article/view/13616"
            },
            {
              title: "PENGEMBANGAN GAME ARCADE 2D “FRUITDASH” MENGGUNAKAN JAVASCRIPT PADA GAME ENGINE CONSTRUCT 3",
              source: "Jurnal Methodika",
              date: "Sep 20, 2024",
              link: "https://doi.org/10.46880/mtk.v10i2.3104"
            },
            {
              title: "Implementasi Case Based Reasoning Untuk Mendiagnosis Diabetes Menggunakan K-Nearest Neighbor",
              source: "Santika (Seminar Nasional Informatika Bela Negara) 2024",
              date: "Sep 13, 2024",
              link: "https://santika.upnjatim.ac.id/submissions/index.php/santika/article/view/410"
            },
            {
              title: "Metode Simulated Annealing Untuk Optimasi Biaya Operasional Penerbangan",
              source: "Santika (Seminar Nasional Informatika Bela Negara) 2024",
              date: "Sep 27, 2024",
              link: "https://santika.upnjatim.ac.id/submissions/index.php/santika/article/view/313"
            },
          ].map((pub, idx) => (
            <div
              key={idx}
              className="bg-base-300 shadow-md p-6 rounded-md flex flex-col sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <h2 className="text-lg font-bold mb-1">{pub.title}</h2>
                <p className="text-sm opacity-80">
                  {pub.source} · {pub.date}
                </p>
              </div>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm mt-3 sm:mt-0"
              >
                Show publication <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
              </a>
            </div>
          ))}
        </div>
      )}
      {activeTab === "Certificate" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="card bg-base-300 shadow-md p-2 cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-32 object-cover opacity-70 hover:opacity-100 transition"
              />
              <p className="text-center mt-2 font-semibold">{cert.title}</p>
            </div>
          ))}
        </div>
      )}

      {selectedCert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-base-100 p-4 rounded-lg shadow-lg relative max-w-3xl">
            <button
              className="absolute top-2 right-2 btn btn-sm btn-circle"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="max-h-[80vh] object-contain"
            />
            <p className="text-center mt-2 font-bold">
              {selectedCert.title}
            </p>
          </div>
        </div>
      )}
      {activeTab === "Projects" && (
        <div className="mt-10 space-y-4">
          {[
            {
              title: "Sistem aplikasi berbasis web untuk klasifikasi kambuh kanker tiroid",
              tech: "Flask, Python, SMOTE, Stack Ensemble, Decision Tree, SVM, Logistic Regression",
              img: "/src/assets/project/tcrpredict.png",
              link: "https://endinrahmanda.github.io/photobox"
            },
            {
              title: "Website Profil Sekolah Menggunakan Laravel dan Bootstrap",
              tech: "Laravel, Bootstrap, PHP, JavaScipt, HTML, CSS",
              img: "/src/assets/project/tanada.png",
              link: "https://endinrahmanda.github.io/toko-obat"
            },
            {
              title: "Analisis dan Desain Jaringan Lab PTIK Gedung FIK UPN Veteran Jawa Timur",
              tech: "Packet Tracer",
              img: "/src/assets/project/analisis jaringan.png",
              link: "https://endinrahmanda.github.io/toko-obat"
            },
            {
              title: "Game Arkade Plane Dash",
              tech: "JavaScript",
              img: "/src/assets/project/plane dash.png",
              link: "https://endinrahmanda.github.io/planeDash/"
            },
                        {
              title: "Game Arkade Fruid Slash",
              tech: "JavaScript, Construct2",
              img: "/src/assets/project/fruit slash.png",
              link: "https://endinrahmanda.github.io/fruit-slash/"
            },
          ].map((proj, idx) => (
            <div
              key={idx}
              className="bg-base-300 shadow-md p-6 rounded-md flex flex-col sm:flex-row items-center gap-4"
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-32 h-20 object-cover rounded-md shadow"
              />
              <div className="flex-1">
                <h2 className="text-lg font-bold mb-1">{proj.title}</h2>
                <p className="text-sm opacity-80 flex items-center gap-2">
                  <i className="fa-solid fa-code"></i> {proj.tech}
                </p>
              </div>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                View Project <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
