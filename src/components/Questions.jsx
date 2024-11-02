"use client"

import { questions } from "@/assets"
import Heading from "./sub-components/Heading"
import Question from "./sub-components/Question"

const Questions = () => {
    return (
        <div id="questions" className="h-full lg:h-auto py-20 md:-mt-60 px-16 md:px-24 lg:px-48 lg:my-20">
            <Heading text={"Questions and Answers"} />
            <div>
                <ul className="flex flex-col gap-y-3">
                    {
                        questions.map((question, i) => (
                            <Question key={i} data={question} index={i} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Questions
