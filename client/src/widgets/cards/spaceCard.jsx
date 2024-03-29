import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
export function SpaceCard() {
  return (
    <Card className="w-full md:w-96 shadow-lg shadow-yellow-500/50">
      <CardBody className="h-48 md:h-64 lg:h-76 bg-[url('SVGs/spaceCard.svg')]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mb-4 h-12 w-12 text-gray-900"
        >
          <path
            fillRule="evenodd"
            d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
            clipRule="evenodd"
          />
          <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
        </svg>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-lg md:text-xl lg:text-2xl truncate">
          LU Space
        </Typography>
        <Typography className="text-sm md:text-base lg:text-lg truncate h-16 md:h-32 lg:h-38">
          Our esteemed institution is renowned for its commitment to academic excellence and innovation. 
          With a diverse range of programs, a faculty of accomplished scholars, and state-of-the-art research facilities, 
          the university fosters both learning and research. Its inclusive campus community encourages students 
          to engage in extracurricular activities, from clubs to cultural events, while promoting leadership and 
          social responsibility. Leading University is dedicated to producing well-rounded graduates ready to excel 
          in the global job market and make a positive impact on the world.
        </Typography>
      </CardBody>
      <CardFooter className="bg-lime-200 border-0 rounded-b-xl roun pt-2">
        <a href="#" className="inline-block">
          <Button size="sm" variant="text" className="flex items-center gap-2">
            Explore More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}


export default SpaceCard;