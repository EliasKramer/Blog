import { Injectable } from '@angular/core';
import { AreaOfInterest } from './area-of-interest';

@Injectable({
  providedIn: 'root'
})
export class AreasOfInterestService {
  areasOfInterest: AreaOfInterest[] = [
    new AreaOfInterest(
      'Neural Networks',
      'This field is still very young, and there is still so much more to learn about neural networks.',
      'https://images.theconversation.com/files/374303/original/file-20201210-18-elk4m.jpg?ixlib=rb-1.1.0&rect=0%2C22%2C7500%2C5591&q=45&auto=format&w=926&fit=clip',
      'Picture of a neural network - (should be replaced)',
      '/neural-networks'
    ),
    new AreaOfInterest(
      'Chess Engine',
      'These Algorithms are so complex, that attempts at solving this game could be considered an art.',
      'https://pbs.twimg.com/media/EkdwuWgXYAUzaIb.jpg:large',
      'Robot playing chess - (should be replaced)',
      '/chess-engine'
    ),
    new AreaOfInterest(
      'Game Development',
      'I have always been interested in game development, and I have been working on a few projects.',
      'https://assets1.ignimgs.com/2018/03/27/fortnite-battleroyale-blogroll-1522177042308_160w.jpg?width=1280',
      'Picture of a game - (should be replaced)',
      '/game-development'
    ),
    new AreaOfInterest(
      'Simulations',
      'I have always been interested in simulations, and I have been working on a few projects.',
      '/assets/images/slime_sim.jpeg',
      'Screenshot of a slime simulation',
      '/simulations'
      ),
    new AreaOfInterest(
      'Cyber Security',
      'I have always been interested in cyber security, and I have been working on a few projects.',
      'https://www.fbk.eu/wp-content/uploads/2020/12/Cover-Cyber-Security-1.jpg',
      'Picture of a cyber security - (should be replaced)',
      '/cyber-security'
    ),
    new AreaOfInterest(
      'Fun Algorithms',
      'I have always been interested in fun algorithms, and I have been working on a few projects.',
      'data:image/png;base64,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',
      'Picture of a fun algorithm - (should be replaced)',
      '/fun-algorithms'
    ),
  ];

  constructor() { }
  
  getAreasOfInterest(): AreaOfInterest[]{
    return this.areasOfInterest;
  }
}
