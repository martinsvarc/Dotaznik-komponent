import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"

interface City {
  name: string
  rank: number
}

const NEW_JERSEY_CITIES: City[] = [
  { rank: 1, name: "Newark" },
  { rank: 2, name: "Jersey City" },
  { rank: 3, name: "Paterson" },
  { rank: 4, name: "Lakewood township" },
  { rank: 5, name: "Elizabeth" },
  { rank: 6, name: "Edison township" },
  { rank: 7, name: "Woodbridge township" },
  { rank: 8, name: "Toms River township" },
  { rank: 9, name: "Hamilton township" },
  { rank: 10, name: "Trenton" },
  { rank: 11, name: "Clifton" },
  { rank: 12, name: "Cherry Hill township" },
  { rank: 13, name: "Brick township" },
  { rank: 14, name: "Camden" },
  { rank: 15, name: "Bayonne" },
  { rank: 16, name: "East Orange" },
  { rank: 17, name: "Passaic" },
  { rank: 18, name: "Old Bridge township" },
  { rank: 19, name: "Franklin township" },
  { rank: 20, name: "Gloucester township" },
  { rank: 21, name: "Middletown township" },
  { rank: 22, name: "Union City" },
  { rank: 23, name: "Piscataway township" },
  { rank: 24, name: "Vineland" },
  { rank: 25, name: "Union township" },
  { rank: 26, name: "Jackson township" },
  { rank: 27, name: "Irvington township" },
  { rank: 28, name: "North Bergen township" },
  { rank: 29, name: "Hoboken" },
  { rank: 30, name: "Parsippany-Troy Hills township" },
  { rank: 31, name: "New Brunswick" },
  { rank: 32, name: "Perth Amboy" },
  { rank: 33, name: "Plainfield" },
  { rank: 34, name: "Bloomfield township" },
  { rank: 35, name: "Howell township" },
  { rank: 36, name: "Wayne township" },
  { rank: 37, name: "West New York" },
  { rank: 38, name: "East Brunswick township" },
  { rank: 39, name: "Washington township" },
  { rank: 40, name: "Monroe township" },
  { rank: 41, name: "Evesham township" },
  { rank: 42, name: "Egg Harbor township" },
  { rank: 43, name: "West Orange township" },
  { rank: 44, name: "Mount Laurel township" },
  { rank: 45, name: "South Brunswick township" },
  { rank: 46, name: "Manchester township" },
  { rank: 47, name: "Sayreville borough" },
  { rank: 48, name: "Hackensack" },
  { rank: 49, name: "Bridgewater township" },
  { rank: 50, name: "Berkeley township" },
  { rank: 51, name: "Linden" },
  { rank: 52, name: "Hillsborough township" },
  { rank: 53, name: "North Brunswick township" },
  { rank: 54, name: "Teaneck township" },
  { rank: 55, name: "Marlboro township" },
  { rank: 56, name: "Manalapan township" },
  { rank: 57, name: "Winslow township" },
  { rank: 58, name: "Montclair township" },
  { rank: 59, name: "Fort Lee borough" },
  { rank: 60, name: "Kearny" },
  { rank: 61, name: "Atlantic City" },
  { rank: 62, name: "Galloway township" },
  { rank: 63, name: "Monroe township" },
  { rank: 64, name: "Pennsauken township" },
  { rank: 65, name: "Belleville township" },
  { rank: 66, name: "Fair Lawn borough" },
  { rank: 67, name: "Freehold township" },
  { rank: 68, name: "Ewing township" },
  { rank: 69, name: "City of Orange township" },
  { rank: 70, name: "Long Branch" },
  { rank: 71, name: "Garfield" },
  { rank: 72, name: "Deptford township" },
  { rank: 73, name: "Willingboro township" },
  { rank: 74, name: "Lawrence township" },
  { rank: 75, name: "Voorhees township" },
  { rank: 76, name: "Livingston township" },
  { rank: 77, name: "West Windsor township" },
  { rank: 78, name: "Westfield" },
  { rank: 79, name: "Stafford township" },
  { rank: 80, name: "Princeton" },
  { rank: 81, name: "Rahway" },
  { rank: 82, name: "Lacey township" },
  { rank: 83, name: "East Windsor township" },
  { rank: 84, name: "Englewood" },
  { rank: 85, name: "Nutley township" },
  { rank: 86, name: "Mount Olive township" },
  { rank: 87, name: "Bergenfield borough" },
  { rank: 88, name: "Hamilton township" },
  { rank: 89, name: "Bernards township" },
  { rank: 90, name: "Neptune township" },
  { rank: 91, name: "Ocean township" },
  { rank: 92, name: "Millville" },
  { rank: 93, name: "Bridgeton" },
  { rank: 94, name: "Pemberton township" },
  { rank: 95, name: "Wall township" },
  { rank: 96, name: "Randolph township" },
  { rank: 97, name: "Rockaway township" },
  { rank: 98, name: "Ridgewood village" },
  { rank: 99, name: "Paramus borough" },
  { rank: 100, name: "Barnegat township" },
  { rank: 101, name: "Lodi borough" },
  { rank: 102, name: "Cliffside Park borough" },
  { rank: 103, name: "Carteret borough" },
  { rank: 104, name: "Mahwah township" },
  { rank: 105, name: "Maplewood township" },
  { rank: 106, name: "Medford township" },
  { rank: 107, name: "Raritan township" },
  { rank: 108, name: "Scotch Plains township" },
  { rank: 109, name: "Glassboro borough" },
  { rank: 110, name: "West Milford township" },
  { rank: 111, name: "Burlington township" },
  { rank: 112, name: "South Plainfield borough" },
  { rank: 113, name: "Plainsboro township" },
  { rank: 114, name: "Montgomery township" },
  { rank: 115, name: "Cranford township" },
  { rank: 116, name: "Morris township" },
  { rank: 117, name: "Roxbury township" },
  { rank: 118, name: "Vernon township" },
  { rank: 119, name: "Montville township" },
  { rank: 120, name: "West Deptford township" },
  { rank: 121, name: "North Plainfield borough" },
  { rank: 122, name: "Roselle borough" },
  { rank: 123, name: "Summit" },
  { rank: 124, name: "Lyndhurst township" },
  { rank: 125, name: "Hillside township" },
  { rank: 126, name: "Millburn township" },
  { rank: 127, name: "Lindenwold borough" },
  { rank: 128, name: "Lower township" },
  { rank: 129, name: "Moorestown township" },
  { rank: 130, name: "Little Egg Harbor township" },
  { rank: 131, name: "Harrison" },
  { rank: 132, name: "Elmwood Park borough" },
  { rank: 133, name: "Secaucus" },
  { rank: 134, name: "Morristown" },
  { rank: 135, name: "Pleasantville" },
  { rank: 136, name: "Jefferson township" },
  { rank: 137, name: "Hazlet township" },
  { rank: 138, name: "Sparta township" },
  { rank: 139, name: "Maple Shade township" },
  { rank: 140, name: "Palisades Park borough" },
  { rank: 141, name: "Middle township" },
  { rank: 142, name: "Hawthorne borough" },
  { rank: 143, name: "Point Pleasant borough" },
  { rank: 144, name: "Tinton Falls borough" },
  { rank: 145, name: "Aberdeen township" },
  { rank: 146, name: "Rutherford borough" },
  { rank: 147, name: "Delran township" },
  { rank: 148, name: "Dover" },
  { rank: 149, name: "Dumont borough" },
  { rank: 150, name: "Washington township" },
  { rank: 151, name: "South Orange Village township" },
  { rank: 152, name: "Weehawken township" },
  { rank: 153, name: "Cinnaminson township" },
  { rank: 154, name: "Hopewell township" },
  { rank: 155, name: "Holmdel township" },
  { rank: 156, name: "Denville township" },
  { rank: 157, name: "Wyckoff township" },
  { rank: 158, name: "New Milford borough" },
  { rank: 159, name: "Springfield township" },
  { rank: 160, name: "Franklin township" },
  { rank: 161, name: "Madison borough" },
  { rank: 162, name: "North Arlington borough" },
  { rank: 163, name: "Warren township" },
  { rank: 164, name: "Readington township" },
  { rank: 165, name: "South River borough" },
  { rank: 166, name: "Pequannock township" },
  { rank: 167, name: "Branchburg township" },
  { rank: 168, name: "Clark township" },
  { rank: 169, name: "Asbury Park" },
  { rank: 170, name: "Haddon township" },
  { rank: 171, name: "Mantua township" },
  { rank: 172, name: "Robbinsville township" },
  { rank: 173, name: "Phillipsburg" },
  { rank: 174, name: "Tenafly borough" },
  { rank: 175, name: "Metuchen borough" },
  { rank: 176, name: "Fairview borough" },
  { rank: 177, name: "Highland Park borough" },
  { rank: 178, name: "Somerville borough" },
  { rank: 179, name: "Florham Park borough" },
  { rank: 180, name: "Hammonton" },
  { rank: 181, name: "Ramsey borough" },
  { rank: 182, name: "Edgewater borough" },
  { rank: 183, name: "Little Falls township" },
  { rank: 184, name: "Hopatcong borough" },
  { rank: 185, name: "Hanover township" },
  { rank: 186, name: "Middlesex borough" },
  { rank: 187, name: "Saddle Brook township" },
  { rank: 188, name: "Verona township" },
  { rank: 189, name: "Woolwich township" },
  { rank: 190, name: "Collingswood borough" },
  { rank: 191, name: "Roselle Park borough" },
  { rank: 192, name: "Harrison township" },
  { rank: 193, name: "Berkeley Heights township" },
  { rank: 194, name: "New Providence borough" },
  { rank: 195, name: "Eatontown borough" },
  { rank: 196, name: "Cedar Grove township" },
  { rank: 197, name: "Ridgefield Park village" },
  { rank: 198, name: "Woodland Park borough" },
  { rank: 199, name: "Clinton township" },
  { rank: 200, name: "Florence township" },
  { rank: 201, name: "Lumberton township" },
  { rank: 202, name: "Pennsville township" },
  { rank: 203, name: "Bound Brook borough" },
  { rank: 204, name: "Red Bank borough" },
  { rank: 205, name: "Oakland borough" },
  { rank: 206, name: "Haddonfield borough" },
  { rank: 207, name: "East Greenwich township" },
  { rank: 208, name: "Upper township" },
  { rank: 209, name: "Freehold borough" },
  { rank: 210, name: "Glen Rock borough" },
  { rank: 211, name: "Bordentown township" },
  { rank: 212, name: "Hasbrouck Heights borough" },
  { rank: 213, name: "River Edge borough" },
  { rank: 214, name: "Wallington borough" },
  { rank: 215, name: "Bellmawr borough" },
  { rank: 216, name: "Gloucester City" },
  { rank: 217, name: "Ridgefield borough" },
  { rank: 218, name: "Ringwood borough" },
  { rank: 219, name: "Guttenberg" },
  { rank: 220, name: "Westwood borough" },
  { rank: 221, name: "Chatham township" },
  { rank: 222, name: "Beachwood borough" },
  { rank: 223, name: "Ocean City" },
  { rank: 224, name: "East Hanover township" },
  { rank: 225, name: "Franklin Lakes borough" },
  { rank: 226, name: "Wanaque borough" },
  { rank: 227, name: "Wantage township" },
  { rank: 228, name: "Lincoln Park borough" },
  { rank: 229, name: "Little Ferry borough" },
  { rank: 230, name: "Pompton Lakes borough" },
  { rank: 231, name: "Pine Hill borough" },
  { rank: 232, name: "West Caldwell township" },
  { rank: 233, name: "Totowa borough" },
  { rank: 234, name: "Manville borough" },
  { rank: 235, name: "Waterford township" },
  { rank: 236, name: "Somers Point" },
  { rank: 237, name: "East Rutherford borough" },
  { rank: 238, name: "Southampton township" },
  { rank: 239, name: "River Vale township" },
  { rank: 240, name: "Mount Holly township" },
  { rank: 241, name: "Millstone township" },
  { rank: 242, name: "Montvale borough" },
  { rank: 243, name: "Wood-Ridge borough" },
  { rank: 244, name: "South Amboy" },
  { rank: 245, name: "Waldwick borough" },
  { rank: 246, name: "Hackettstown" },
  { rank: 247, name: "Woodbury" },
  { rank: 248, name: "Hillsdale borough" },
  { rank: 249, name: "Maywood borough" },
  { rank: 250, name: "Kinnelon borough" },
  { rank: 251, name: "Burlington" },
  { rank: 252, name: "Bogota borough" },
  { rank: 253, name: "Colts Neck township" },
  { rank: 254, name: "Matawan borough" },
  { rank: 255, name: "Chesterfield township" },
  { rank: 256, name: "Keansburg borough" },
  { rank: 257, name: "Lopatcong township" },
  { rank: 258, name: "Park Ridge borough" },
  { rank: 259, name: "Leonia borough" },
  { rank: 260, name: "Chatham borough" },
  { rank: 261, name: "Washington township" },
  { rank: 262, name: "Westampton township" },
  { rank: 263, name: "Ventnor City" },
  { rank: 264, name: "Plumsted township" },
  { rank: 265, name: "Cresskill borough" },
  { rank: 266, name: "Absecon" },
  { rank: 267, name: "Ocean township" },
  { rank: 268, name: "Mansfield township" },
  { rank: 269, name: "Edgewater Park township" },
  { rank: 270, name: "Clayton borough" },
  { rank: 271, name: "Pittsgrove township" },
  { rank: 272, name: "Pitman borough" },
  { rank: 273, name: "Boonton" },
  { rank: 274, name: "Caldwell borough" },
  { rank: 275, name: "Haledon borough" },
  { rank: 276, name: "Dunellen borough" },
  { rank: 277, name: "Audubon borough" },
  { rank: 278, name: "Upper Saddle River borough" },
  { rank: 279, name: "Long Hill township" },
  { rank: 280, name: "Carneys Point township" },
  { rank: 281, name: "North Haledon borough" },
  { rank: 282, name: "Closter borough" },
  { rank: 283, name: "West Long Branch borough" },
  { rank: 284, name: "Hardyston township" },
  { rank: 285, name: "Northfield" },
  { rank: 286, name: "Raritan borough" },
  { rank: 287, name: "Runnemede borough" },
  { rank: 288, name: "Kenilworth borough" },
  { rank: 289, name: "Oradell borough" },
  { rank: 290, name: "Byram township" },
  { rank: 291, name: "Butler borough" },
  { rank: 292, name: "Bedminster township" },
  { rank: 293, name: "Newton" },
  { rank: 294, name: "Spotswood borough" },
  { rank: 295, name: "Riverside township" },
  { rank: 296, name: "North Hanover township" },
  { rank: 297, name: "Glen Ridge borough" },
  { rank: 298, name: "Fairfield township" },
  { rank: 299, name: "Mansfield township" },
  { rank: 300, name: "Upper Deerfield township" },
  { rank: 301, name: "Bernardsville borough" },
  { rank: 302, name: "Chester township" },
  { rank: 303, name: "Fanwood borough" },
  { rank: 304, name: "Bloomingdale borough" },
  { rank: 305, name: "Berlin borough" },
  { rank: 306, name: "Brigantine" },
  { rank: 307, name: "Haddon Heights borough" },
  { rank: 308, name: "Palmyra borough" },
  { rank: 309, name: "Wharton borough" },
  { rank: 310, name: "Washington borough" },
  { rank: 311, name: "Emerson borough" },
  { rank: 312, name: "Green Brook township" },
  { rank: 313, name: "Upper Freehold township" },
  { rank: 314, name: "Rumson borough" },
  { rank: 315, name: "Buena Vista township" },
  { rank: 316, name: "Barrington borough" },
  { rank: 317, name: "Keyport borough" },
  { rank: 318, name: "Stratford borough" },
  { rank: 319, name: "Midland Park borough" },
  { rank: 320, name: "Milltown borough" },
  { rank: 321, name: "Linwood" },
  { rank: 322, name: "Morris Plains borough" },
  { rank: 323, name: "Mountainside borough" },
  { rank: 324, name: "Tabernacle township" },
  { rank: 325, name: "Washington township" },
  { rank: 326, name: "Allendale borough" },
  { rank: 327, name: "Rockaway borough" },
  { rank: 328, name: "Eastampton township" },
  { rank: 329, name: "North Caldwell borough" },
  { rank: 330, name: "Shamong township" },
  { rank: 331, name: "New Hanover township" },
  { rank: 332, name: "Union township" },
  { rank: 333, name: "Watchung borough" },
  { rank: 334, name: "Carlstadt borough" },
  { rank: 335, name: "Old Tappan borough" },
  { rank: 336, name: "Paulsboro borough" },
  { rank: 337, name: "Oceanport borough" },
  { rank: 338, name: "Lebanon township" },
  { rank: 339, name: "Prospect Park borough" },
  { rank: 340, name: "Roseland borough" },
  { rank: 341, name: "Woodcliff Lake borough" },
  { rank: 342, name: "Logan township" },
  { rank: 343, name: "Dennis township" },
  { rank: 344, name: "Hainesport township" },
  { rank: 345, name: "Fair Haven borough" },
  { rank: 346, name: "Little Silver borough" },
  { rank: 347, name: "Berlin township" },
  { rank: 348, name: "Mendham township" },
  { rank: 349, name: "Mount Arlington borough" },
  { rank: 350, name: "Tewksbury township" },
  { rank: 351, name: "Hightstown borough" },
  { rank: 352, name: "Rochelle Park township" },
  { rank: 353, name: "Manasquan borough" },
  { rank: 354, name: "Mullica township" },
  { rank: 355, name: "Belmar borough" },
  { rank: 356, name: "Blairstown township" },
  { rank: 357, name: "Jamesburg borough" },
  { rank: 358, name: "Norwood borough" },
  { rank: 359, name: "Andover township" },
  { rank: 360, name: "Union Beach borough" },
  { rank: 361, name: "Somerdale borough" },
  { rank: 362, name: "Clementon borough" },
  { rank: 363, name: "Independence township" },
  { rank: 364, name: "Greenwich township" },
  { rank: 365, name: "Allamuchy township" },
  { rank: 366, name: "Fairfield township" },
  { rank: 367, name: "Englewood Cliffs borough" },
  { rank: 368, name: "Salem" },
  { rank: 369, name: "Garwood borough" },
  { rank: 370, name: "Frankford township" },
  { rank: 371, name: "Maurice River township" },
  { rank: 372, name: "Holland township" },
  { rank: 373, name: "Margate City" },
  { rank: 374, name: "Wildwood" },
  { rank: 375, name: "Franklin borough" },
  { rank: 376, name: "Harrington Park borough" },
  { rank: 377, name: "Greenwich township" }
]

interface NewJerseyCitySelectorProps {
  onCitySelect: (city: City) => void
  selectedCities: string[]
}

const NewJerseyCitySelector: React.FC<NewJerseyCitySelectorProps> = ({ onCitySelect, selectedCities }) => {
  return (
    <div className="space-y-2">
      <label htmlFor="city-select" className="block text-sm font-medium text-[#E4B649]">
        Select a New Jersey City
      </label>
      <Select onValueChange={(value) => {
        const selectedCity = NEW_JERSEY_CITIES.find(city => city.name === value)
        if (selectedCity) onCitySelect(selectedCity)
      }}>
        <SelectTrigger id="city-select" className="w-full bg-black/50 border-[#E4B649]/20 text-white">
          <SelectValue placeholder="Choose a city" />
        </SelectTrigger>
        <SelectContent className="bg-black border-[#E4B649]/20">
          <ScrollArea className="h-[200px]">
            {NEW_JERSEY_CITIES.map((city) => (
              <SelectItem 
                key={city.rank} 
                value={city.name}
                className="text-white hover:bg-[#E4B649]/20"
                disabled={selectedCities.includes(city.name)}
              >
                {city.name}
              </SelectItem>
            ))}
          </ScrollArea>
        </SelectContent>
      </Select>
      <p className="text-xs text-[#E4B649]/70">
        * You can select up to 10 cities from New Jersey
      </p>
    </div>
  )
}

export default NewJerseyCitySelector
