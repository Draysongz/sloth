import { Flex, Box, Image, Icon, Text } from "@chakra-ui/react"
import { FaUserGroup } from "react-icons/fa6"
import { FaFire } from "react-icons/fa"
import { Link } from "react-router-dom"
import { BiCoinStack } from "react-icons/bi"
import { useEffect, useState } from "react"
function Navbar({
  userId,
  name,
}: {
  userId: number | undefined
  name: string | null
}) {
  const [activeTab, setActiveTab] = useState("")
  useEffect(() => {
    const path = location.pathname
    if (path == "/") {
      setActiveTab("home")
    }
    if (path.includes("referral")) {
      setActiveTab("ref")
    }
    if (path.includes("boost")) {
      setActiveTab("boost")
    }
    if (path.includes("tasks")) {
      setActiveTab("tasks")
    }
  }, [])
  return (
    <Flex justify={"center"}>
      <Box
        pos={"fixed"}
        display={"flex"}
        justifyContent={"center"}
        bg={"1d1d1d"}
        bottom={"0"}
        h={"90px"}
        w={"100%"}
      >
        <Box
          w={["90%", "320px"]}
          h={"60px"}
          rounded={"20px"}
          bg="#282828"
        >
          <Flex
            justify={"center"}
            align={"center"}
            gap={"5"}
            color={"white"}
            h={"100%"}
          >
            <Link
              to={`/?userId=${userId}&name=${name}`}
              onClick={() => setActiveTab("home")}
            >
              <Box
                textAlign={"center"}
                w={"50px"}
                bg={activeTab == "home" ? "#423c2c" : ""}
                rounded={"10px"}
                px={"8px"}
                py={"3px"}
              >
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Image
                    alt=""
                    src="/coin.svg"
                    mt={"3px"}
                    w={"20px"}
                    h={"20px"}
                  />
                </Box>
                <Text fontSize={""}>Tap</Text>
              </Box>
            </Link>
            <Link
              to={`/boost?userId=${userId}&name=${name}`}
              onClick={() => setActiveTab("boost")}
            >
              <Box
                textAlign={"center"}
                px={4}
                py={"3px"}
                bg={activeTab == "boost" ? "#423c2c" : ""}
                rounded={"10px"}
              >
                <Icon mb={"-5px"} as={FaFire} color={"gray"} />
                <Text fontSize={"small"}>Boost</Text>
              </Box>
            </Link>
            <Link
              to={`/tasks?userId=${userId}&name=${name}`}
              onClick={() => setActiveTab("earn")}
            >
              <Box
                textAlign={"center"}
                px={4}
                py={"3px"}
                bg={activeTab == "earn" ? "#423c2c" : ""}
                rounded={"10px"}
              >
                <Icon mb={"-5px"} as={BiCoinStack} color={"gray"} />
                <Text fontSize={"small"}>Earn</Text>
              </Box>
            </Link>
            <Link
              to={`/referral?userId=${userId}&name=${name}`}
              onClick={() => setActiveTab("ref")}
            >
              <Box
                textAlign={"center"}
                px={4}
                py={"3px"}
                bg={activeTab == "ref" ? "#423c2c" : ""}
                rounded={"10px"}
              >
                <Icon mb={"-5px"} as={FaUserGroup} color={"gray"} />
                <Text fontSize={""}>Ref</Text>
              </Box>
            </Link>
            <Link to="/status">
              <Box textAlign={"center"} px={4}>
                <Icon mb={"-5px"} as={BiCoinStack} color={"gray"} />
                <Text fontSize={""}>Stats</Text>
              </Box>
            </Link>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}
export default Navbar
