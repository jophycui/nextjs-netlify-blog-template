import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Confirmation() {
  return (
    <Layout>
      <BasicMeta url={"/confirmation"} />
      <OpenGraphMeta url={"/confirmation"} />
      <TwitterCardMeta url={"/confirmation"} />
      <div className="container">
        <div className="content">
          <h1>
            Congratulations<span className="fancy">!</span>
          </h1>
          <h2>Your account has been successfully activated.</h2>
          <p>
            You can now go back to your app and log in to access your account.
            Thank you for joining <span className="fancy">LeChinese</span>!
          </p>
          <div className="button-container">
            <a href="yourapp://login" className="button">
              Open App
            </a>
          </div>
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 2rem 1.5rem;
          text-align: center;
        }
        .content {
          max-width: 600px;
          margin: 0 auto;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
          margin-top: 1rem;
        }
        p {
          font-size: 1.25rem;
          color: #555;
          margin-top: 1.5rem;
          line-height: 1.6;
        }
        .fancy {
          color: #15847d;
        }
        .button-container {
          margin-top: 2rem;
        }
        .button {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          font-weight: bold;
          text-decoration: none;
          color: #fff;
          background-color: #15847d;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }
        .button:hover {
          background-color: #136b65;
        }
        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
          p {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </Layout>
  );
}
