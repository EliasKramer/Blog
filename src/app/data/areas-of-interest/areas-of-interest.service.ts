import { Injectable } from '@angular/core';
import { AreaOfInterest } from './area-of-interest';
import { Project } from './project';

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
      'neural-networks',
      [
        new Project(
          'Digit Recognition',
          'This is a neural network that can recognize handwritten digits.',
          'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/MnistExamples.png/220px-MnistExamples.png',
          'Picture of handwritten digits - (should be replaced)',
          '/digit-recognition'
        )
      ]
    ),
    new AreaOfInterest(
      'Chess Engine',
      'These Algorithms are so complex, that attempts at solving this game could be considered an art.',
      'https://pbs.twimg.com/media/EkdwuWgXYAUzaIb.jpg:large',
      'Robot playing chess - (should be replaced)',
      'chess-engine',
      [
        new Project(
          'Array Based Chess Engine',
          'This is a chess engine that uses arrays to store the board state.',
          'https://chessily.com/wp-content/uploads/2022/04/chess-board-setup-the-chess-starting-position.png',
          'Picture of a chess board - (should be replaced)',
          'array-based-chess-engine'
        ),
        new Project(
          'Bitboard Based Chess Engine',
          'This is a chess engine that uses bitboards to store the board state.',
          'https://chessily.com/wp-content/uploads/2022/04/chess-board-setup-the-chess-starting-position.png',
          'Picture of a chess board - (should be replaced)',
          'bitboard-based-chess-engine'
        )
      ]
    ),
    new AreaOfInterest(
      'Game Development',
      'I have always been interested in game development, and I have been working on a few projects.',
      'https://assets1.ignimgs.com/2018/03/27/fortnite-battleroyale-blogroll-1522177042308_160w.jpg?width=1280',
      'Picture of a game - (should be replaced)',
      'game-development',
      [
        new Project(
          'ShellShock Live Copy',
          'This is a copy of the game ShellShock Live made in Greenfoot.',
          'assets/images/shellshock.png',
          'Screenshot of the Front Page of ShellShock Live',
          'shellshock-live-copy'
        ),
        new Project(
          'Online Snake',
          'This is snake made in Java where you can play with other people.',
          'https://raw.githubusercontent.com/sebinbabu/snake-xenia/master/game.png',
          'Snake - (should be replaced)',
          'online-snake'
        ),
        new Project(
          '2D Avatar Rock Bending Game',
          'This is a game where you can move, throw and cut rocks like in Avatar, the last Airbender.',
          'https://upload.wikimedia.org/wikipedia/en/4/46/Toph_Beifong.png',
          'Picture of Avatar - (should be replaced)',
          '2d-avatar-rock-bending-game'
        ),
        new Project(
          'Green Life',
          'This is a game where you build a civilization and try to be as climate friendly as possible.',
          'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/94c09e71810467.5c486248ecc8b.jpg',
          'Picture of the Green Life Game - (should be replaced)',
          'green-life'
        ),
        new Project(
          '2048 Cubed',
          'This is a game where you play 2048 in 2D with Physics.',
          'data:image/jpeg;base64,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',
          'Picture of 2048 cubed - (should be replaced)',
          '2048-cubed',
        ),
        new Project(
          'Connect 4',
          '',
          '',
          '',
          ''
        ),
        new Project(
          'Text Adventure in Prolog',
          '',
          '',
          '',
          ''
        ),
        new Project(
          'Rope Swinger',
          '',
          '',
          '',
          ''
        ),
      ]
    ),
    new AreaOfInterest(
      'Simulations',
      'I have always been interested in simulations, and I have been working on a few projects.',
      '/assets/images/slime_sim.jpeg',
      'Screenshot of a slime simulation',
      'simulations',
      [
        new Project(
          'Slime Simulation',
          'This is a slime simulation that I made in Unity using HLSL.',
          '/assets/images/slime_sim.jpeg',
          'Screenshot of a slime simulation',
          'slime-simulation',
        ),
        new Project(
          'Cloth Simulation',
          'This is a cloth simulation that I made in Unity.',
          '',
          '',
          'cloth-simulation'
        ),
      ]
      ),
    new AreaOfInterest(
      'Cyber Security',
      'I have always been interested in cyber security, and I have been working on a few projects.',
      'https://www.fbk.eu/wp-content/uploads/2020/12/Cover-Cyber-Security-1.jpg',
      'Picture of a cyber security - (should be replaced)',
      'cyber-security',
      [
        new Project(
          'Password Cracker in Java',
          'This is a password cracker that I made in Java.',
          '',
          '',
          'password-cracker'
        ),
      ]
    ),
    new AreaOfInterest(
      'Fun Algorithms',
      'I have always been interested in fun algorithms, and I have been working on a few projects.',
      'data:image/png;base64,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',
      'Picture of a fun algorithm - (should be replaced)',
      'fun-algorithms',
      [
        new Project(
          'Path Finding',
          'A Path Finding Algorithm',
          '',
          '',
          'path-finding',
        )
      ]
    ),
  ];

  constructor() { }
  
  getAreasOfInterest(): AreaOfInterest[]{
    return this.areasOfInterest;
  }

      
  getAreaOfInterestWithLink(link: string) : AreaOfInterest | null{
    console.log("link: " + link);
    for(let i = 0; i < this.areasOfInterest.length; i++)
    {
      console.log("checking link: " + this.areasOfInterest[i].routerLink);
      if(this.areasOfInterest[i].routerLink == link)
      {
        return this.areasOfInterest[i];
      }
    }
    return null;
  }
}
