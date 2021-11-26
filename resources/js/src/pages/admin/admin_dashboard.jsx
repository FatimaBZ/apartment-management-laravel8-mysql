import React from 'react'
import './admin_dashboard.css'


export default function AdminDashboard() {
    return (
        <div>
            <div class="home-content">
                <div class="overview-boxes">
                    <div class="box">
                        <div class="right-side">
                            <div class="box-topic">Buildings</div>
                            <div class="number">20</div>
                        </div>
                        <i class="bx bx-buildings building"></i>
                    </div>
                    <div class="box">
                        <div class="right-side">
                            <div class="box-topic">Apartments</div>
                            <div class="number">1600</div>
                        </div>
                        <i class="bx bxs-building-house apartment"></i>
                    </div>
                    <div class="box">
                        <div class="right-side">
                            <div class="box-topic">Gardens</div>
                            <div class="number">100</div>
                        </div>
                        <i class="bx bx bxs-tree garden"></i>
                    </div>
                    <div class="box">
                        <div class="right-side">
                            <div class="box-topic">Visitors</div>
                            <div class="number">200</div>
                        </div>
                        <i class="bx bxs-user visitor"></i>
                    </div>
                    
                </div>
                <div class="owner-list">
                    <div class="recent-owner box">
                        <div class="title">New Owners</div>
                        <div class="owner-details">
                            <ul class="details">
                                <li class="topic">Date</li>
                                <li><a href="#">11 Oct 2021</a></li>
                                <li><a href="#">11 Oct 2021</a></li>
                                <li><a href="#">11 Oct 2021</a></li>
                                <li><a href="#">11 Oct 2021</a></li>
                                <li><a href="#">11 Oct 2021</a></li>
                            </ul>
                            <ul class="details">
                                <li class="topic">Apartment No.</li>
                                <li><a href="#">12</a></li>
                                <li><a href="#">12</a></li>
                                <li><a href="#">12</a></li>
                                <li><a href="#">11</a></li>
                                <li><a href="#">11</a></li>
                            </ul>
                            <ul class="details">
                                <li class="topic">Name</li>
                                <li><a href="#">User Full Name1</a></li>
                                <li><a href="#">User Full Name1</a></li>
                                <li><a href="#">User Full Name1</a></li>
                                <li><a href="#">User Full Name1</a></li>
                                <li><a href="#">User Full Name1</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="recent-owner box">
                        <div class="title">New Visitors</div>
                        <div class="owner-details">
                            <ul class="visitor-details">
                                <li class="topic">Date</li>
                                <li><a href="#">11 Oct 2021</a></li>
                                <li><a href="#">11 Oct 2021</a></li>
                                <li><a href="#">11 Oct 2021</a></li>
                                <li><a href="#">11 Oct 2021</a></li>
                                <li><a href="#">11 Oct 2021</a></li>
                            </ul>
                            <ul class="details">
                                <li class="topic">Apartment No.</li>
                                <li><a href="#">12</a></li>
                                <li><a href="#">12</a></li>
                                <li><a href="#">12</a></li>
                                <li><a href="#">11</a></li>
                                <li><a href="#">11</a></li>
                            </ul>
                            <ul class="details">
                                <li class="topic">Name</li>
                                <li><a href="#">User Full Name1</a></li>
                                <li><a href="#">User Full Name1</a></li>
                                <li><a href="#">User Full Name1</a></li>
                                <li><a href="#">User Full Name1</a></li>
                                <li><a href="#">User Full Name1</a></li>
                            </ul>
                        </div>
                </div>
            </div>
            
        </div>
        <div>
            <br/>
      <a href="/admin_home">Go Back</a><br/>
      <br/>
        
      </div>
        </div>
    )
}
