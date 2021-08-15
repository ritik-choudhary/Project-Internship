import React from 'react'
import { Doughnut, Line } from 'react-chartjs-2'
import { HiOutlineDotsHorizontal, HiOutlineDotsVertical } from 'react-icons/hi'
import { CgArrowTopRight, CgArrowBottomRight } from 'react-icons/cg'
import { RiFolderDownloadFill } from 'react-icons/ri'
import { FiSend } from 'react-icons/fi'
import './ChartData.css'
import Button from './Button'

export default function ChartsData() {
  return (
    <div className='charts-data'>
      {/* <div className='first-row'> */}
      <div className='first-row-first-column'>
        <div className='title'>
          <p>Total Applications</p>
          <HiOutlineDotsHorizontal />
        </div>
        <div className='details-chart-1'>
          <div className='text'>
            <h3>7956</h3>
            <h6>
              <CgArrowTopRight /> +3.39%
            </h6>
          </div>

          <div className='chart-1'>
            <div className='percentage-chart-1'>+70%</div>
            <Doughnut
              data={{
                datasets: [
                  {
                    label: 'My First Dataset',
                    data: [70, 30],
                    backgroundColor: ['#6543b4', '#222328'],
                    borderColor: ['#6543b4', '#222328'],
                    hoverOffset: 5,
                    borderWidth: 1,
                    borderRadius: [10, -10],
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                cutout: '80%',
              }}
            />
          </div>
        </div>
      </div>
      <div className='first-row-second-column'>
        <div className='title'>
          <p>Shortlisted Candidates</p>
          <HiOutlineDotsHorizontal />
        </div>
        <div className='details-chart-2'>
          <div className='text'>
            <h3>7956</h3>
            <h6>
              <CgArrowTopRight /> +06%
            </h6>
          </div>
          <div className='chart-2'>
            <div className='percentage-chart-2'>+60%</div>

            <Doughnut
              data={{
                datasets: [
                  {
                    label: 'My First Dataset',
                    data: [60, 40],
                    backgroundColor: ['#2e9cfd', '#222328'],
                    borderColor: ['#2e9cfd', '#222328'],
                    hoverOffset: 5,
                    borderWidth: 1,
                    borderRadius: [10, -10],
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                cutout: '80%',
              }}
            />
          </div>
        </div>
      </div>
      <div className='first-row-third-column'>
        <div className='title'>
          <p>Total Applications</p>
          <HiOutlineDotsHorizontal />
        </div>
        <div className='details-chart-3'>
          <div className='text'>
            <h3>1501</h3>
            <h6>
              <CgArrowBottomRight /> -04%
            </h6>
          </div>

          <div className='chart-3'>
            <div className='percentage-chart-3'>+40%</div>
            <Doughnut
              data={{
                datasets: [
                  {
                    label: 'My First Dataset',
                    data: [60, 40],
                    backgroundColor: ['#fe5260', '#222328'],
                    borderColor: ['#fe5260', '#222328'],
                    borderWidth: 1,
                    borderRadius: [10, -10],
                    hoverOffset: 5,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                cutout: '80%',
              }}
            />
          </div>
        </div>
      </div>
      <div className='second-row-first-column'>
        <div className='title'>
          <h3>Applications Received</h3>
          <div className='status-period'>
            <h4>This Year</h4>
            <h4>This Week</h4>
            <h4>Today</h4>
            <h4>
              <RiFolderDownloadFill /> Download Report
            </h4>
            <HiOutlineDotsVertical />
          </div>
        </div>
        <div className='details-chart-row-2-col-1'>
          <div className='line-chart'>
            <Line
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [
                  {
                    data: [10, 40, 20, 60, 80, 60, 60],
                    fill: false,
                    borderColor: '#fe5260',
                    tension: 0.4,
                  },
                  // {
                  //   data: [50, 42, 60, 40, 80, 60, 60],
                  //   fill: false,
                  //   borderColor: '#2e9cfd',
                  //   tension: 0.4,
                  // },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
      </div>
      <div className='second-row-second-column'>
        <div className='title'>
          <h3>Total Applications</h3>
        </div>
        <div className='scales'>
          <div className='application-bar-container'>
            <div className='bullet'></div>
            <div className='text'>Application</div>
            <div className='bar'></div>
          </div>
          <div className='liked-bar-container'>
            <div className='bullet'></div>
            <div className='text'>Short Liked</div>
            <div className='bar'></div>
          </div>
          <div className='required-bar-container'>
            <div className='bullet'></div>
            <div className='text'>Required</div>
            <div className='bar'></div>
          </div>
          <div className='hold-bar-container'>
            <div className='bullet'></div>
            <div className='text'>On Hold</div>
            <div className='bar'></div>
          </div>
          <div className='performance-bar-container'>
            <div className='bullet'></div>
            <div className='text'>Performance</div>
            <div className='bar'></div>
          </div>
        </div>
      </div>
      <div className='third-row-first-column'>
        <div className='title'>
          <h3>Referals and Campaign Stats</h3>
          <div className='number-analysis'>
            <div className='icon'>
              <FiSend />
            </div>
            <div className='text'>
              <p className='red-text'>40 Campaigns sent in total</p>
              <p>4 campaigns sent in last month</p>
            </div>
          </div>
        </div>
        <div className='stats'>
          <div className='item'>
            <div className='reach'>
              <h2>User's Reached</h2>
              <div className='numbers'>
                <h4 className='blue-text'>
                  <CgArrowTopRight /> +3.59%
                </h4>
                <h2>7956</h2>
              </div>
            </div>
            <div className='line'></div>
          </div>
          <div className='item'>
            <div className='reach'>
              <h2>User's Reached</h2>
              <div className='numbers'>
                <h4 className='blue-text'>
                  <CgArrowTopRight /> +3.59%
                </h4>
                <h2>7956</h2>
              </div>
            </div>
            <div className='line'></div>
          </div>
          <div className='item'>
            <div className='reach'>
              <h2>User's Reached</h2>
              <div className='numbers'>
                <h4 className='blue-text'>
                  <CgArrowTopRight /> +3.59%
                </h4>
                <h2>7956</h2>
              </div>
            </div>
            <div className='line'></div>
          </div>
          <div className='reach'>
            <h2>User's Reached</h2>
            <div className='numbers'>
              <h4 className='blue-text'>
                <CgArrowTopRight /> +3.59%
              </h4>
              <h2>7956</h2>
            </div>
          </div>
        </div>
        <div className='button-container'>
          <Button classname='button' color={'btn-blue'} size={'big-btn'}>
            Start a new Campaign now
          </Button>
          <Button classname='button' color={'btn-red'} size={'big-btn'}>
            Pause all Running Campaigns
          </Button>
        </div>
      </div>
      <div className='third-row-second-column'>
        <div className='title'>
          <h4>Open Positions by Department</h4>
          <HiOutlineDotsHorizontal />
        </div>
        <div className='chart-content-row-3-col-2'>
          <Doughnut
            data={{
              datasets: [
                {
                  label: 'My First Dataset',
                  data: [45, 25, 30],
                  backgroundColor: ['#6543b4', '#2e9cfd', '#fe5260'],
                  borderColor: ['#6543b4', '#2e9cfd', '#fe5260'],
                  borderRadius: ['5px', '5px', '5px'],
                  hoverOffset: 20,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              cutout: '50%',
            }}
          />
          <div className='label'>Open Positions</div>
        </div>
      </div>
      {/* </div>  */}
    </div>
  )
}
