import React from "react"
import {useStaticQuery, graphql} from 'gatsby';
import PropTypes from "prop-types"

const query = graphql`
  {
    dataJson {
      jobs {
        company
        companySite
        description
        end
        start
        title
      }
    }
  }
`;

const Timeline = () => {
  const {jobs} = useStaticQuery(query);
  const cards = jobs.map(job => {
    return (
      <div>
        <h4>{jobs.company}</h4>
      </div>
    )
  })

  return (
    <>
      {cards}
    </>
  )
}

Timeline.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape({
    start: PropTypes.string.isRequired,
    end: PropTypes.string,
    company: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    companySite: PropTypes.string,
  })).isRequired
}

export default Timeline
