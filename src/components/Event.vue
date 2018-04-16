// カレンダー
// https://wikiki.github.io/components/calendar/
<template>
  <div>
    <div class="columns">
      <div class="column"></div>
    </div>
    <div class="columns">
      <div class="column is-12-mobile is-4-tablet is-offset-2-tablet">
        <div class="calendar">
          <div class="calendar-nav">
            <div class="calendar-nav-previous-month">
              <button class="button is-text">
                <b-icon
                  icon="arrow-left">
                </b-icon>
              </button>
            </div>
            <div>2018年4月</div>
            <div class="calendar-nav-next-month">
              <button class="button is-text">
                <b-icon
                  icon="arrow-right">
                </b-icon>
              </button>
            </div>
          </div>
          <div class="calendar-container">
            <div class="calendar-header">
              <div class="calendar-date">日</div>
              <div class="calendar-date">月</div>
              <div class="calendar-date">火</div>
              <div class="calendar-date">水</div>
              <div class="calendar-date">木</div>
              <div class="calendar-date">金</div>
              <div class="calendar-date">土</div>
            </div>
            <div class="calendar-body">
              <div class="calendar-date is-disabled"><button class="date-item">26</button></div>
              <div class="calendar-date is-disabled"><button class="date-item">27</button></div>
              <div class="calendar-date is-disabled"><button class="date-item">28</button></div>
              <div class="calendar-date"><button class="date-item">1</button></div>
              <div class="calendar-date">
                <b-tooltip label="鼓笛隊合宿"><button class="date-item is-active">
                  2
                </button></b-tooltip>
              </div>
              <div class="calendar-date"><button class="date-item">3</button></div>
              <div class="calendar-date"><button class="date-item">4</button></div>
              <div class="calendar-date"><button class="date-item">5</button></div>
              <div class="calendar-date"><button class="date-item">6</button></div>
              <div class="calendar-date"><button class="date-item">7</button></div>
              <div class="calendar-date"><button class="date-item">8</button></div>
              <div class="calendar-date"><button class="date-item">9</button></div>
              <div class="calendar-date"><button class="date-item">10</button></div>
              <div class="calendar-date"><button class="date-item">11</button></div>
              <div class="calendar-date"><button class="date-item">12</button></div>
              <div class="calendar-date"><button class="date-item">13</button></div>
              <div class="calendar-date"><button class="date-item">14</button></div>
              <div class="calendar-date">
                <b-tooltip label="お泊まり会"><button class="date-item is-active">
                  15
                </button></b-tooltip>
              </div>
              <div class="calendar-date"><button class="date-item">16</button></div>
              <div class="calendar-date"><button class="date-item">17</button></div>
              <div class="calendar-date"><button class="date-item">18</button></div>
              <div class="calendar-date"><button class="date-item">19</button></div>
              <div class="calendar-date"><button class="date-item">20</button></div>
              <div class="calendar-date">
                <b-tooltip label="月次祭"><button class="date-item is-active">
                  21
                </button></b-tooltip>
              </div>
              <div class="calendar-date"><button class="date-item">22</button></div>
              <div class="calendar-date"><button class="date-item">23</button></div>
              <div class="calendar-date"><button class="date-item">24</button></div>
              <div class="calendar-date"><button class="date-item">25</button></div>
              <div class="calendar-date"><button class="date-item">26</button></div>
              <div class="calendar-date"><button class="date-item">27</button></div>
              <div class="calendar-date"><button class="date-item">28</button></div>
              <div class="calendar-date"><button class="date-item">29</button></div>
              <div class="calendar-date"><button class="date-item">30</button></div>
              <div class="calendar-date"><button class="date-item">31</button></div>
              <div class="calendar-date is-disabled"><button class="date-item">1</button></div>
            </div>
          </div>
        </div>        
      </div>
      <div class="column is-5-tablet is-offset-1-mobile is-10-mobile">
      <b-table
            :data="isEmpty ? [] : data"
            :striped="true"
            :mobile-cards="true">
            <template slot-scope="props">
                <b-table-column field="date" label="日付">
                    {{ props.row.date }}                  
                </b-table-column>

                <b-table-column field="name" label="イベント名">
                    {{ props.row.name }}
                </b-table-column>

                <b-table-column field="place" label="場所">
                    {{ props.row.place }}
                </b-table-column>
                <b-table-column field="start_time" label="開始時間">
                    {{ props.row.start_time }}
                </b-table-column>
            </template>
            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                icon="emoticon-sad"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>予定が未登録です,もう少し待ってね</p>
                    </div>
                </section>
            </template>
        </b-table>
      </div>      
    </div>
  </div>
</template>

<script>

export default {
  name: 'access',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      data: [
        {'date': '2', 'name': '鼓笛隊合宿', 'place': '大教会', 'start_time': '15:00'},
        {'date': '15', 'name': 'お泊まり会', 'place': '自教会', 'start_time': '09:00'},
        {'date': '21', 'name': '月次祭', 'place': '自教会神殿', 'start_time': '17:00'}
      ]
    }
  }
}
</script>