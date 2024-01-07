import { RiMenu3Line } from 'react-icons/ri';
import {
  Root,
  Trigger,
  Overlay,
  Portal,
  Content,
} from '@radix-ui/react-dialog';
import { Logo } from '../logo';
import { NavLinksData } from '../../../data/links/links';
import { Link } from 'react-router-dom';
import { useTransition, animated } from '@react-spring/web';
import { useState } from 'react';

export function MobileNavItems() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const transition = useTransition(dialogOpen, {
    from: { y: '-100px', opacity: 0 },
    enter: { y: '0', opacity: 1 },
    leave: { y: '-100px' },
    config: { duration: 100 },
  });
  return (
    <div className='block md:hidden'>
      <Root open={dialogOpen} onOpenChange={setDialogOpen}>
        <Trigger className='text-2xl'>
          <span>
            <RiMenu3Line />
          </span>
        </Trigger>
        <Portal>
          <Overlay className='fixed left-0 top-0 h-screen w-full bg-gray-800/60 backdrop-blur'>
            <Content>
              {transition(
                (style, item) =>
                  item && (
                    <animated.div
                      style={style}
                      className='w-full bg-gray-300/40 p-4 text-center text-white transition-all'
                    >
                      <Logo className='mx-auto w-fit' />
                      <div className='mt-5 flex flex-col gap-3 text-xl font-semibold'>
                        {NavLinksData.map(({ title, url }) => (
                          <Link key={url} to={url}>
                            {title}
                          </Link>
                        ))}
                      </div>
                    </animated.div>
                  ),
              )}
            </Content>
          </Overlay>
        </Portal>
      </Root>
    </div>
  );
}
