import { Link } from "react-router-dom"
import styles from './Footer.module.css'
import Logo from "../logos/Logo"

function Footer() {
    return (
        <footer className={styles.footer}>
        <div id={styles['foot-1']}>
          <div className="max-w-7xl mb-16 m-auto pt-10 flex justify-between flex-wrap">
            <div className="max-w-sm mt-8" >
              <Logo/>
              <p className="mb-6 mt-4 font-quicksand text-white sm:pr-8">
                TheAlphaOnes is a community of young developer from all-over the
                world mainly based on discord which got as ambition to
                revolutionize the world.
              </p>
              {/* social - start */}
              <div className="flex gap-4">
                <a
                  rel="noreferrer"
                  href="https://www.instagram.com/TheAlphaOnes/"
                  target="_blank"
                  className="text-white transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <img src="img/insta-foot.svg" alt="" className={styles["icon-effect"]} />
                </a>
                <a
                  rel="noreferrer"
                  href="https://twitter.com/TheAlphaOnesDev"
                  target="_blank"
                  className="text-white transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <img src="img/twt.svg" alt="" className={styles["icon-effect"]} />
                </a>
                <a
                  rel="noreferrer"
                  href="https://github.com/TheAlphaOnes/"
                  target="_blank"
                  className="text-white transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <img src="img/github-foot.svg" alt="" className={styles["icon-effect"]} />
                </a>
                <a
                  rel="noreferrer"
                  href="https://discord.gg/nbrFDHmsK3"
                  target="_blank"
                  className="text-white transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <img src="img/cord-foot.svg" alt="" className={styles["icon-effect"]} />
                </a>
              </div>
              {/* social - end */}
            </div>
            <div className="font-seogeUI mt-8">
              <div className="mb-4 font-medium-600 uppercase tracking-widest text-gray-100">
                Usefull Links
              </div>
              <nav className="flex flex-col gap-4">
                <div>
                  <Link
                    to="/contact"
                    rel="noreferrer"
                    className="text-white text-base transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Contact Us
                  </Link>
                </div>
                <div>
                  <Link
                    to="/launches"
                    rel="noreferrer"
                    className="text-white text-base transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Launches
                  </Link>
                </div>
                <div>
                  <Link
                    to="/project"
                    rel="noreferrer"
                    className="text-white text-base transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Projects
                  </Link>
                </div>
                <div>
                  <Link
                    to="/team"
                    rel="noreferrer"
                    className="text-white text-base transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Team
                  </Link>
                </div>
                <div>
                  <Link
                    to="/blog"
                    rel="noreferrer"
                    className="text-white text-base transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Blog
                  </Link>
                </div>
              </nav>
            </div>
            <div className="mt-8">
              <div className="mb-4 font-medium-600 uppercase tracking-widest text-gray-100">
                Credits
              </div>
              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    rel="noreferrer"
                    href="https://thenorm.netlify.app"
                    target="_blank"
                    className="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Vishnu Gupta aka Norm - Developer
                  </a>
                </div>
                <div>
                  <a
                    rel="noreferrer"
                    href="/"
                    className="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Doumbia Al-Hassan aka Caprisunpapy - UI/UX Designer
                  </a>
                </div>
                <div>
                  <a
                    href="/"
                    rel="noreferrer"
                    className="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Akshat Khare aka BitPixel - Tester &amp; Assister
                  </a>
                </div>
                <div>
                  <a
                    href="https://thecognito.vercel.app"
                    rel="noreferrer"
                    className="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Cognito aka Harsh - Developer
                  </a>
                </div>
                <div>
                  <a
                    href="https://sauravmeghwal.com"
                    rel="noreferrer"
                    className="text-white transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Saurav - Developer
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
