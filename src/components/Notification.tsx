import { notificationImages } from '../constants/index';

type NotificationProps = {
  className?: string
  title?: string
}

const Notification = ({ className, title } : NotificationProps) => {
  return (
    <div className={`${className || ''} flex items-center p-4 pr-6 bg-[var(--n-9)]/40 backdrop-blur bg-[var(--n-1)]/10 rounded-2xl gap-5`}>
        <img 
            src='https://cdn3.iconfinder.com/data/icons/star-wars-color/216/darth-vader-512.png'
            width={62}
            height={62}
            alt="image"
            className='rounded-xl' 
        
        />
        <div className="flex-1">
            <h6 className='mb-1 font-semibold text-base'>{title}</h6>
            <div className="flex items-center justify-between">
                <ul className="flex -m-0.5">
                    {notificationImages.map((item, index) => (
                        <li key={index} className='flex w-6 h-6 border-2 border-[var(--n-12)] rounded-full overflow-hidden'>
                            <img
                                src={item}
                                className='w-full'
                                width={20}
                                height={20}
                                alt={item}
                            />
                        </li>
                    ))}
                </ul>
                <div className='body-2 text-[var(--n-13)]'>
                    1 min ago
                </div>
            </div>
        </div>
    </div>
  )
}

export default Notification