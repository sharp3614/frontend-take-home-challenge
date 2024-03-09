import { Header, NewsFeed } from "./components";

const App = () => {
  
  return (
    <>
      <Header />
      <main className="flex flex-col md:flex-row p-4 w-full gap-8">
        <div className="w-full">
          <NewsFeed />
        </div>
      </main>
    </>
  );
};

export default App;
