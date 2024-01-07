import { Container } from '../../components/ui/container';
import { FaLocationDot } from 'react-icons/fa6';
import { BiSolidFoodMenu } from 'react-icons/bi';
import { IoWallet } from 'react-icons/io5';
import { PiBowlFoodFill } from 'react-icons/pi';

export function Instruction() {
  const InstructionsData = [
    {
      icon: <BiSolidFoodMenu />,
      title: 'Choose Orders',
      description: 'Check over hundreds of menus to pick your favorite food',
    },
    {
      icon: <FaLocationDot />,
      title: 'Select Location',
      description: 'Choose the location where your food will be delivered.',
    },
    {
      icon: <IoWallet />,
      title: 'Payment',
      description: 'You don not have to pay before you get your foods.',
    },
    {
      icon: <PiBowlFoodFill />,
      title: 'Enjoy meals',
      description: 'Food is made and delivered directly to your home.',
    },
  ];

  return (
    <section className='mt-16 bg-gradient-to-b from-primary-200 to-primary-100 py-16'>
      <Container>
        <h1 className='text-center text-3xl font-bold text-primary-600'>
          How Does It Works
        </h1>
        <div className='mt-16 grid grid-cols-2 gap-6 text-center lg:grid-cols-4'>
          {InstructionsData.map(({ title, icon, description }) => (
            <div key={title}>
              <span className='mx-auto block w-fit text-5xl text-primary-600'>
                {icon}
              </span>
              <h3 className='mt-4 text-lg font-semibold'>{title}</h3>
              <p className='mt-2 text-sm text-gray-600'>{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
