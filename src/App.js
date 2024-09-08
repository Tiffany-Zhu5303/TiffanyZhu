import './App.css';

function App() {

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center">
      <div className='w-screen bg-periwinkle p-8 flex justify-center items-center'>
        <div className='mx-8 relative profile-hover rounded-full'>
          <img src={'/LinkedinProfile.jpeg'} className='icon-hover rounded-full w-34 h-34 mx-auto border-2 opacity-1' alt='Tiffany Zhu' />
          <div className='text-container opacity-0 rounded-full border-2 border-whit absolute inset-0 flex justify-center items-center'>
            <p className='text-4xl text-center cursor-normal'>Let's connect on <a href='https://www.linkedin.com/in/tiffany-zhu-tz/' target='_blank' rel='noreferrer' className='hover:underline'>Linkedin</a>!</p>
          </div>
        </div>
        <div className=''>
          <h1 className='font-bold text-2xl'>I'm Tiffany Zhu 👋🏼</h1>
          <p className='text-lg pt-4'>
            Hello World! Welcome to my personal website 🤩
            <br/>I am a senior at CUNY's Hunter College majoring in Computer Science as an aspiring web and software developer.
            <br/>I am passionate about creating and designing websites and applications that are user-friendly and accessible to all.
          </p>
        </div>
      </div>
      <div>
          <p className='text-4xl font-bold pt-20'>More Content On It's Way 🚧</p>
      </div>
    </div>
  );
}

export default App;
