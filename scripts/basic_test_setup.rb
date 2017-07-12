require 'appium_lib'
require 'rubygems'
require 'test/unit'

class BasicTestSetup < Test::Unit::TestCase
    API_KEY = '76DE22AF894C45C2B522B715E541FCF1'

    def api_key
        if API_KEY == 'YOUR_API_KEY'
            raise "Please set your API key to run this example (see https://github.com/testobject-sample-scripts/setups/tree/master/ruby/test_unit/watcher)"
            exit 1
        else
            return API_KEY
        end
    end

    def setup
        desired_capabilities = {
            caps:       {
                testobject_api_key: api_key,
                testobject_device: 'Motorola_Moto_E_2nd_gen_free',
                testobject_report_results: true
            },
            appium_lib: {
                server_url: 'http://appium.testobject.com/wd/hub',
                wait: 10
            }
        }

        # Start the driver
        @driver = Appium::Driver.new(desired_capabilities).start_driver
    end

    def wait_for(seconds)
        Selenium::WebDriver::Wait.new(timeout: seconds).until { yield }
    end

    # test method names must start with "test_"
    # to be recognized by the test-unit framework
    def test_login
        puts 'WAITING...'
        sleep 300
        #wait_for(20) { @driver.find_element(:xpath, "//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.view.View[1]/android.widget.FrameLayout[2]/android.widget.LinearLayout[1]/android.widget.TextView[1]").attribute('visibility') == 'visible' }
        puts 'DONE'
    end

    def teardown
        @driver.quit if @driver
    rescue Selenium::WebDriver::Error::UnknownError => e
        raise e unless e.message.match /Unable to find session with requested ID/
    end
end
