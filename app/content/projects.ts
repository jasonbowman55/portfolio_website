// Edit this file to add, remove, or reorder projects — both the home page
// and the /projects page read from these two lists.

export interface Project {
  title: string
  description: string
  image?: string
  link: string
  tags: string[]
  status?: string
}

export const engineering: Project[] = [
  {
    title: 'Squat Hero',
    description: 'E155 final project combining ARM STM32 MCU, multiple IMU sensors, and an iCE40 FPGA to analyze and give real-time feedback on squat form and depth.',
    image: '/images/full_mcu_imu.jpeg',
    link: '/projects/squat-hero',
    tags: ['ARM MCU', 'FPGA', 'IMU'],
  },
  {
    title: 'Microprocessor Design & Application',
    description: 'Seven lab reports from E155 covering embedded systems development, MCU programming in C, and FPGA programming in SystemVerilog.',
    image: '/images/microp.jpeg',
    link: '/projects/microprocessor',
    tags: ['E155', 'Embedded C', 'SystemVerilog'],
  },
  {
    title: 'Roll Stabilization in High-Power Model Rockets',
    description: 'E178 final project: active control system using a brushless motor and steel flywheel to counteract rocket rotation, with real-time PID control and UART telemetry.',
    image: '/images/HPR_Cover.jpeg',
    link: '/projects/high-power-rocketry',
    tags: ['E178', 'PID Control', 'Mechanical'],
  },
  {
    title: 'Autonomous Underwater Robot',
    description: 'E80 team project developing an autonomous underwater robot with custom photodiode sensors to measure RGB light intensity at depths up to 5 meters.',
    image: '/images/robot_underwater.jpeg',
    link: '/projects/underwater',
    tags: ['E80', 'Robotics', 'Sensors'],
  },
]

export const impact: Project[] = [
  {
    title: 'Non-Ferrous Landmine Detection',
    description: 'Leading a six-person Senior Clinic team developing drone-deployed RADAR, LiDAR, and multispectral sensing to detect PFM-1 landmines for humanitarian demining in Ukraine.',
    image: '/images/sokilDrone.jpg',
    link: '#',
    status: 'In progress · through May 2025',
    tags: ['Clinic Project', 'RADAR', 'Humanitarian'],
  },
  {
    title: 'Vilnius Helping Ukraine',
    description: 'Documentation and support of refugee assistance efforts in Vilnius, Lithuania during the Ukraine crisis, combining language skills with humanitarian action.',
    image: '/images/vilnius_helping_ukraine.jpeg',
    link: 'https://sites.google.com/g.hmc.edu/vilnius-helping-ukraine/english',
    tags: ['Humanitarian', 'Language'],
  },
]
