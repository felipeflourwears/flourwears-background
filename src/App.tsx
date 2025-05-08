import ButtonGradient from './assets/svg/ButtonGradient';
import Button from './components/Button';

function App() {

  return (
    <>
      <h1 className='text-3xl font-bold underline'>Hello World!</h1>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Button className='mt-20' href='#login'>
          Something 
        </Button>
        
        <Button className='mt-20'>
          Something 
        </Button>

        <button className="text-[var(--n-6)] hover:text-[var(--color-1)] transition-colors px-4 py-2 border">
          Soy un botón
        </button>
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
