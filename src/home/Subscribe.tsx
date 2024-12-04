import info from '../../src/assets/info-circle.svg';


const Subscribe = () => {
  return (
	<div className="max-w-4xl bg-[#F7C5BD] flex flex-row justify-between p-4 rounded-md">
    <div className="flex flex-row justify-between gap-1 items-center align-middle">
      <img src={info} alt="information w-4 h-4"   />
      <h2 className="text-black font-bold text-base">Subscribe ended</h2>
    </div>
    <p className="underline underline-offset-1 cursor-pointer text-bg-primary">subscribe</p>

  </div>
  )
}

export default Subscribe